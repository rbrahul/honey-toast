import TickIcon from '../assets/icons/close.svg';
import { createToast, DEFAULT_TOAST_OPTIONS, isHTMLElement, prefix } from './toastBuilder';
import { Animation, ToastBuilderProps, ToastOptions, ToastContent } from './type';
import { DomAnimator } from './utils/dom-animator.js';

const containerSelector: string = 'container';

type Options = {
    classNames: string[];
    container: HTMLElement;
    autoCloseAfter: number;
    showProgress: boolean;
    position: string;
    closeable: boolean;
    type: 'default' | 'success' | 'info' | 'warning' | 'error';
    progressbarClasses: string[];
    onShow: () => void;
    onClose: () => void;
};

type MessageAndSubject = {
    message: string;
    title: string;
};

type Content = string | MessageAndSubject | HTMLDivElement;

const defaultOptions: Options = {
    classNames: [],
    container: document.body,
    autoCloseAfter: 3_000,
    showProgress: false,
    position: 'top-right',
    closeable: true,
    type: 'success',
    progressbarClasses: [],
    onClose: () => {},
    onShow: () => {},
};

interface ToastEntry {
    mountedIn: HTMLElement;
    element: HTMLElement;
    options: Partial<Options>;
    appearedAt: number;
}

interface ActionDelegator {
    close(ToastEntry): void;
    closeAll(): void;
    update(ToastEntry, Content, Options): void;
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

    update(content: Content, options: Options) {
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
    options = defaultOptions;
    toasts: Toast[] = [];

    notify(content: ToastContent, options: ToastOptions) {
        const toastOptions = {
            ...DEFAULT_TOAST_OPTIONS,
            ...(options ?? {}),
        };
        const toastContainer = this.#mountToastContainer(toastOptions?.position);
        const toast = new Toast(content, toastOptions, this);
        //@ts-ignore add typescript type later
        toast.domManager = this.mountToastIntoDom(toastContainer, toast.element, toastOptions);
        toast.mountedIn = toastContainer;
        toast.appearedAt = Date.now();
        this.toasts.push(toast);
        return toast;
    }

    mountToastIntoDom(container: HTMLElement, toastNode: HTMLElement, options: ToastOptions) {
        // TODO: Add option to create custom transtion classes {enter:CUSTOM_CLASS_Enter, exit: CUSTOM_CLASS_Exit}
        const animationType = options?.animation ? getAnimationClass(options?.animation as Animation) : 'rb-toast-slide';
        const animator = new DomAnimator(toastNode, {
            animationClassPrefix: animationType as string,
            animationKind: ['rb-toast-slide'].includes(animationType) ? 'transition' : 'animation',
            onEnter: () => {
                console.log('Toast has entered');
            },
            onExit: () => {
                console.log('Toast started to exit');
            },
            onEntered: () => {
                if (typeof options.onShow === 'function') {
                    options.onShow();
                }
                if (options.duration) {
                    let autoCloseAfter = options.duration;
                    if (options.duration < 1000) {
                        console.warn('Duration should be greater than 1000ms');
                        autoCloseAfter = 1000;
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
                if (typeof options.onClose === 'function') {
                    options.onClose();
                }
            },
            animationTimeout: 300,
        });
        this.#initialiseCloseBtnEventListener(animator, toastNode, options);
        if (['bottom-right', 'bottom-left', 'center'].includes(options?.position)) {
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

    update(toast: Toast, _: Content, __: Partial<Options>) {
        console.log('Updating toast:', toast);
    }

    closeAll() {
        this.toasts.forEach(toast => {
            this.close(toast);
        });
    }

    #initialiseCloseBtnEventListener(animator: DomRemover, toastNode: HTMLElement, options: ToastOptions) {
        const closeBtn = toastNode.querySelector(`.${prefix('close-btn')}`);
        if (closeBtn) {
            if (!options?.isCloseable) {
                closeBtn.remove();
            } else {
                closeBtn.addEventListener('click', () => {
                    animator?.remove?.();
                    if (typeof options.onClose === 'function') {
                        options.onClose();
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
