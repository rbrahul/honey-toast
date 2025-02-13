import { createToast, DEFAULT_TOAST_OPTIONS, isHTMLElement, prefix } from './toastBuilder';
import { Animation, ToastBuilderProps, ToastOptions, ToastContent } from './type';
import { DomAnimator } from './utils/dom-animator.js';

const containerSelector: string = 'container';

export interface ToastEntry {
    mountedIn: HTMLElement;
    element: HTMLElement;
    options: Partial<ToastOptions>;
    appearedAt: number;
    close():void
    closeAll():void
    update(content: ToastContent, options: ToastOptions):void
}

export interface ActionDelegator {
    close(ToastEntry): void;
    closeAll(): void;
    update(ToastEntry, Content, ToastOptions): void;
}

interface DomRemover {
    remove(): void;
}

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

    update(content: ToastContent, options: ToastOptions) {
        this.delegator.update(this, content, options);
    }
}

const getAnimationClass = (animationName:Animation = 'slide') => {
    return (
        {
            slide: prefix('slide'),
            fade: prefix('fade'),
            zoom: prefix('zoom'),
            bounce: prefix('bounce'),
        }[animationName] ?? animationName
    );
};

class ToastBaker {
    options: ToastOptions = {};
    toasts: Toast[] = [];

    notify(content: ToastContent, options: ToastOptions) {
        this.options = {
            ...DEFAULT_TOAST_OPTIONS,
            ...(options ?? {}),
        };
        console.log("ToastBaker options:", this.options);

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
        const animationType = this.options?.animation ? getAnimationClass(this.options?.animation as Animation) : 'rb-toast-slide';
        const animator = new DomAnimator(toastNode, {
            animationClassPrefix: animationType as string,
            animationKind: ['rb-toast-slide'].includes(animationType) ? 'transition' : 'animation',
            onEnter: () => {},
            onExit: () => {},
            onEntered: () => {
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
                        console.log("Failed to auto close toast", error)
                      }
                    },autoCloseAfter)
                }
            },
            onExited: () => {
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

    // TODO: Implement update method
    update(toast: Toast, _: ToastContent, __: Partial<ToastOptions>) {
        console.log('Updating toast:', toast);
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

    #mountToastContainer(position: string, container = document.body): HTMLElement {
        let toastContainer = container.querySelector<HTMLElement>(
            `.${prefix(containerSelector)}.${prefix(position)}`,
        );
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.classList.add(prefix(containerSelector), prefix(position));
            container.appendChild(toastContainer);
        }
        return toastContainer;
    }
}

const toast = new ToastBaker();

export { toast };
