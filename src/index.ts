import TickIcon from '../assets/icons/tick.svg';

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

const prefix = (name: string) => {
    return `${classPrefix}-${name}`;
};

const isHTMLElement = (value: Content) =>
    typeof value === 'object' && 'tagName' in value && value instanceof HTMLElement;

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

    const hello =
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis tenetur itaque, cupiditate porro accusamus, fugiat iusto illum ipsa nesciunt temporibus ipsum nihil, distinctio assumenda pariatur! Dicta porro fugit deserunt dolorem.';
    console.log(hello);
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
};

class Toast implements ToastEntry {
    options: Partial<Options>;
    content: Content;
    delegator: ActionDelegator;
    mountedIn: HTMLElement;
    appearedAt: number;
    element: HTMLElement;
    constructor(content: Content, options: Partial<Options>, actionDelegator: ActionDelegator) {
        this.options = options;
        this.content = content;
        this.delegator = actionDelegator;
        this.element = renderToast(content, options);
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

    notify(content: Content, options: Partial<Options>) {
        const toastOptions = {
            ...defaultOptions,
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

export default toast;
