import { createToast, DEFAULT_TOAST_OPTIONS, prefix } from './toastBuilder';
import Animator from './animator';
import { AnimationType, ToastOptions, ToastContent } from './type';
export type { AnimationType, ToastOptions, ToastContent, StructuredContent, CustomAnimation, Title, ToastMessage } from './type';

import './styles/toast.css';
import './styles/animation.css';
import { validateOptions } from './validator';

const containerSelector: string = prefix('container');

export interface ToastEntry {
    mountedIn: HTMLElement;
    element: HTMLElement;
    options: Partial<ToastOptions>;
    appearedAt: number;
    close(): void;
    closeAll(): void;
    update(content: ToastContent, options: ToastOptions): void;
}

export interface ActionDelegator {
    close(Toast): void;
    closeAll(): void;
    update(Toast, Content, ToastOptions): void;
}

interface DomRemover {
    remove(): void;
}

const getAnimationClass = (animationName: AnimationType = 'slide') => {
    return (
        {
            slide: prefix('slide'),
            fade: prefix('fade'),
            zoom: prefix('zoom'),
            bounce: prefix('bounce'),
        }[animationName] ?? animationName
    );
};

const extractAnimationClass = (element: HTMLElement): string[] => {
    const animationClassPrefixes = [
        prefix('slide'),
        prefix('fade'),
        prefix('zoom'),
        prefix('bounce'),
    ];
    const classList = Array.from(element.classList).filter(className => {
        return animationClassPrefixes.some(prefix => {
            if (className.startsWith(prefix)) {
                return className;
            }
        });
    });
    return classList;
};

class Toast implements ToastEntry {
    options: ToastOptions;
    content: ToastContent;
    delegator: ActionDelegator;
    mountedIn: HTMLElement;
    appearedAt: number;
    element: HTMLElement;
    domManager: DomRemover;
    constructor(content: ToastContent, options: ToastOptions, actionDelegator: ActionDelegator) {
        this.options = options;
        this.content = content;
        this.delegator = actionDelegator;
        this.element = createToast({
            ...options,
            content,
        });
    }

    close() {
        this.delegator.close(this);
    }

    closeAll() {
        this.delegator.closeAll();
    }

    update(content: ToastContent, options?: ToastOptions) {
        validateOptions({
            content,
            ...options,
        });
        const newOptionsAndContent = {
            ...this.options,
            ...options,
            content,
            offset: {
                ...this.options.offset,
                ...options?.offset
            },
            icon: {
                ...this.options.icon,
                ...options?.icon,
            },
        };

        try {
            const updatedElement = createToast(newOptionsAndContent);
            const existingAnimationClass = extractAnimationClass(this.element);
            updatedElement.classList.add(...existingAnimationClass);
            this.element.innerHTML = updatedElement.innerHTML;
            this.element.setAttribute('class', updatedElement.getAttribute('class'));
            this.delegator.update(this, content, options);
        } catch (error) {}
    }
}

class ToastBaker {
    options: ToastOptions = {};
    toasts: Toast[] = [];
    notify(content: ToastContent, options?: ToastOptions): Toast {
        validateOptions({
            content,
            ...options,
        });
        this.options = {
            ...DEFAULT_TOAST_OPTIONS,
            ...options,
            offset: {
                ...DEFAULT_TOAST_OPTIONS.offset,
                ...options?.offset
            },
            icon: {
                ...DEFAULT_TOAST_OPTIONS.icon,
                ...options?.icon,
            },
        };

        this.#setCssVariables({
            '--toast-position-offset-x': CSS.px(this.options.offset?.x ?? 30),
            '--toast-position-offset-y': CSS.px(this.options.offset?.y ?? 30),
        });

        const toastContainer = this.#mountToastContainer(this.options?.position);
        const toast = new Toast(content, this.options, this);
        //@ts-ignore add typescript type later
        toast.domManager = this.#mountToastIntoDom(toastContainer, toast.element);
        toast.mountedIn = toastContainer;
        toast.appearedAt = Date.now();
        this.toasts.push(toast);
        return toast;
    }

    #mountToastIntoDom(container: HTMLElement, toastNode: HTMLElement) {
        // TODO: Add option to create custom transtion classes {enter:CUSTOM_CLASS_Enter, exit: CUSTOM_CLASS_Exit}
        const animationType = this.options?.animation
            ? getAnimationClass(this.options?.animation as AnimationType)
            : 'rb-toast-slide';
        const animator = new Animator(toastNode, {
            animationClassPrefix: animationType as string,
            animationKind: ['rb-toast-slide'].includes(animationType) ? 'transition' : 'animation',
            onEnter: () => {},
            onExit: () => {},
            onEntered: () => {
                this.#animateProgressbarIfExists(toastNode);
                if (typeof this.options.onShow === 'function') {
                    this.options.onShow();
                }
                if (this.options.duration && this.options.autoClose) {
                    let autoCloseAfter = this.options.duration;
                    if (this.options.duration < 1000) {
                        console.warn('Duration should be greater than 1000ms');
                        autoCloseAfter = 3_000;
                    }
                    setTimeout(() => {
                        try {
                            animator?.remove?.();
                            this.toasts = this.toasts.filter(t => t.element !== toastNode);
                        } catch (error) {

                            console.error('Failed to auto close toast', error);
                        }
                    }, autoCloseAfter);
                }
            },
            onExited: () => {
                if (this.toasts.length === 0 || container?.children?.length === 0) {
                    container.remove();
                }
                if (typeof this.options.onClose === 'function') {
                    this.options.onClose();
                }
            },
            animationTimeout: 300,
        });

        this.#initialiseCloseBtnEventListener(animator, toastNode);
        if (['bottom-right', 'bottom-left', 'center'].includes(this.options?.position)) {
            animator.append(container);
        } else {
            animator.prepend(container);
        }
        return animator;
    }

    close(toast: Toast) {
        this.toasts = this.toasts.filter(t => t !== toast);
        toast.domManager?.remove?.();
    }

    update(toast: Toast, _: ToastContent, __: Partial<ToastOptions>) {
        const currentToast = this.toasts.find(toastItem => {
            return toastItem.element === toast.element;
        });
        if (currentToast) {
            this.#initialiseCloseBtnEventListener(currentToast.domManager, toast.element);
            this.#animateProgressbarIfExists(toast.element);
        }
    }

    closeAll() {
        this.toasts.forEach(toast => {
            this.close(toast);
        });
    }

    #initialiseCloseBtnEventListener(animator: DomRemover, toastNode: HTMLElement) {
        const closeBtn = toastNode.querySelector(`.${prefix('close-btn')}`);
        if (closeBtn) {
            if (!this.options?.isCloseable) {
                closeBtn.remove();
            } else {
                closeBtn.addEventListener('click', () => {
                    animator?.remove?.();
                    if (typeof this.options.onClose === 'function') {
                        this.options.onClose();
                    }
                });
            }
        }
    }

    #animateProgressbarIfExists(toastNode: HTMLElement) {
        const progressBarFillElement = toastNode.querySelector(
            `.${prefix('alert-progress-bar-fill')}`,
        );
        if (progressBarFillElement) {
            if (this.options?.hasProgressBar) {
                let startingProgress = this.options?.progress ?? 0;
                if (startingProgress > 100) {
                    startingProgress = 100;
                } else if (startingProgress < 0) {
                    startingProgress = 0;
                }
                progressBarFillElement.animate(
                    // @ts-ignore
                    [{ width: CSS.percent(startingProgress) }, { width: '100%' }],
                    { duration: this.options.duration, fill: 'forwards' },
                );
            }
        }
    }

    #setCssVariables(properties: Record<string, string | number | CSSUnitValue>) {
        const root = document.documentElement
        if (properties && Object.keys(properties)?.length > 0) {
            for (const [property, value] of Object.entries(properties)) {
                root.style.setProperty(property, value.toString());
            }
        }
    }

    #mountToastContainer(position: string, container = document.body): HTMLElement {
        let toastContainer = container.querySelector<HTMLElement>(
            `.${containerSelector}.${prefix(position)}`,
        );
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.classList.add(containerSelector, prefix(position));
            container.appendChild(toastContainer);
        }
        return toastContainer;
    }
    success(content: ToastContent, options?: ToastOptions): Toast {
        return this.notify(content, { ...options, type: 'success' });
    }
    info(content: ToastContent, options?: ToastOptions): Toast {
        return this.notify(content, { ...options, type: 'info' });
    }
    warn(content: ToastContent, options?: ToastOptions): Toast {
        return this.notify(content, { ...options, type: 'warning' });
    }
    error(content: ToastContent, options?: ToastOptions): Toast {
        return this.notify(content, { ...options, type: 'error' });
    }
}
export default new ToastBaker();
