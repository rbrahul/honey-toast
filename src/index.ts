import TickIcon from '../assets/icons/close.svg';
import { createToast, DEFAULT_TOAST_OPTIONS, isHTMLElement, prefix } from './toastBuilder';
import { ToastBuilderProps, ToastOptions, ToastContent } from './type';

const classPrefix: string = 'rb-toast';
const containerSelector: string = 'container';

type Options = {
    classNames: string[];
    container: HTMLElement;
    autoCloseAfter: number;
    showProgress: boolean;
    position: string;
    closeable: boolean;
    type: 'default' | 'success' | 'info' | 'warning' | 'danger';
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
    update(ToastEntry, Content, Options): void;
}
/*
const renderToast = (content: Content, options: Partial<Options>): HTMLElement => {
    const toastBody = document.createElement('div') as HTMLElement;
    toastBody.classList.add(prefix('alert'));
    if (options?.type) {
        toastBody.classList.add(prefix(options.type));
    }

    if (options?.classNames && options.classNames.length > 0) {
        toastBody.classList.add(...options.classNames);
    }

    const contentDiv = document.createElement('div');
    contentDiv.classList.add(prefix('alert-content'));

    if (options?.closeable) {
        const closeBtn = document.createElement('div');
        closeBtn.classList.add(prefix('alert-close-btn'));
        closeBtn.textContent = 'x';
        contentDiv.appendChild(closeBtn);
    }

    if (isHTMLElement(content)) {
        toastBody.appendChild(content);
    } else if (typeof content === 'object' && ('message' in content || 'title' in content)) {
        if ('title' in content) {
            const title = document.createElement('div');
            title.classList.add(prefix('alert-title'));
            title.textContent = content.title;
            contentDiv.appendChild(title);
            toastBody.appendChild(contentDiv);
        }
        if ('message' in content) {
            const message = document.createElement('div');
            message.classList.add(prefix('alert-message'));
            message.textContent = content.message;
            toastBody.appendChild(contentDiv);
        }
    } else if (typeof content === 'string') {
        const message = document.createElement('div');
        message.classList.add(prefix('alert-message'));
        message.textContent = content;

        const icon = document.createElement('img');
        icon.classList.add(prefix('icon'));
        icon.setAttribute('src', TickIcon);
        // icon.innerHTML = TickIcon;
        message.prepend(icon);

        contentDiv.appendChild(message);
        toastBody.appendChild(contentDiv);
    } else {
        throw new Error(
            'Only string, HTMLElement or an object having keys message, heading is supported as content',
        );
    }
    return toastBody;
};*/

class Toast implements ToastEntry {
    options: ToastOptions;
    content: ToastContent;
    delegator: ActionDelegator;
    mountedIn: HTMLElement;
    appearedAt: number;
    element: HTMLElement;
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
    update(content: Content, options: Options) {
        this.delegator.update(this, content, options);
    }
}

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
        toastContainer.appendChild(toast.element);
        toast.mountedIn = toastContainer;
        toast.appearedAt = Date.now();
        this.toasts.push(toast);
        return toast;
    }

    close(toast: Toast) {
        console.log('closing toast:', toast);
    }

    update(toast: Toast, _: Content, __: Partial<Options>) {
        console.log('Updating toast:', toast);
    }

    closeAll() {}

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

function testToastAlerts() {
    const t = toast.notify('Hello', {
        duration: 1000,
        type: 'default',
        position: 'top-left',
    });

    const t2 = toast.notify('Hello World', {
        duration: 1000,
        position: 'top-left',
        type: 'success',
    });

    const t3 = toast.notify('Hello World 3', {
        duration: 1000,
        position: 'top-left',
        type: 'success',
    });

    const t4 = toast.notify('Hello World 4', {
        duration: 1000,
        position: 'top-right',
        type: 'info',

    });
    const centeredToast = toast.notify('I am aligned center', {
        duration: 1000,
        position: 'center',
        type: 'danger',
    });

    const centeredTopToast = toast.notify('I am top center aligned', {
        duration: 1000,
        position: 'top-center',
        type: 'warning',
    });

    const t5 = toast.notify('Hello World 5', {
        duration: 1000,
        position: 'bottom-right',
    });
    const t6 = toast.notify({
        title: 'Hi, there!',
        message: "Thank you for subscribing our service. For any help feel free to write us."
    },{
        duration: 1000,
        position: 'bottom-right',
    });
}

testToastAlerts();

export default toast;
