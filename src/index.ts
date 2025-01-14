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
    update(ToastEntry, Content, Options): void;
}

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

function minimalTestToastAlerts() {
    const t = toast.notify('Hi There!', {
        duration: 1000,
        type: 'default',
        position: 'top-right',
    });
    const t2 = toast.notify({
        title: 'Hi There!',
        message: 'I hope you are having a greate day.'
    }, {
        duration: 1000,
        type: 'success',
        position: 'top-right',
    });

    const t3 = toast.notify('Hi There!', {
        duration: 1000,
        position: 'top-right',
        type: 'info',
    });

    const t4 = toast.notify('Hi There!', {
        duration: 1000,
        position: 'top-right',
        type: 'warning',
    });

    const t5 = toast.notify('Hi There!', {
        duration: 1000,
        position: 'top-right',
        type: 'error',
    });
   
    const t6 = toast.notify({
        title: 'Hi, there!',
        message: "Thank you for subscribing our service. For any help feel free to write us.",
        buttons:[{
            iconUrl: '../assets/icons/close.svg',
            label: 'Close',
            onClick:() => {
                console.log("Closing  the item");
            }
        },{
            iconUrl: '../assets/icons/tick.svg',
            label: 'Confirm',
            onClick:() => {
                console.log("Confirming the item");
            }
        }
    ]
    },{
        duration: 1000,
        position: 'top-right',
        'type': 'success',
        classNames: ['border-left-5']
    });

    const t7 = toast.notify({
        title: 'Hi, there!',
        message: "Thank you for subscribing our service. For any help feel free to write us.",
        buttons:[{
            iconUrl: '../assets/icons/close.svg',
            label: 'Close',
            onClick:() => {
                console.log("Closing  the item");
            },
            type: 'default',
        },{
            label: 'Confirm',
            classes: [],
            onClick:() => {
                console.log("Confirming the item");
            },
            type: 'success'
        }
    ]
    },{
        duration: 1000,
        position: 'top-right',
        'type': 'error',
    });
}

minimalTestToastAlerts();


function standardTestToastAlerts() {
    const t = toast.notify('Hi There!', {
        duration: 1000,
        type: 'default',
        design: 'standard',
        position: 'top-center',
    });
    const t2 = toast.notify({
        title: 'Hi There!',
        message: 'I hope you are having a greate day.'
    }, {
        duration: 1000,
        type: 'success',
        design: 'standard',
        position: 'top-center',
    });

    const t3 = toast.notify('Hi There!', {
        duration: 1000,
        position: 'top-center',
        design: 'standard',
        type: 'info',
    });

    const t4 = toast.notify('Hi There!', {
        duration: 1000,
        position: 'top-center',
        design: 'standard',
        type: 'warning',
    });

    const t5 = toast.notify('Hi There!', {
        duration: 1000,
        position: 'top-center',
        design: 'standard',
        type: 'error',
    });
   
    const t6 = toast.notify({
        title: 'Hi, there!',
        message: "Thank you for subscribing our service. For any help feel free to write us.",
        buttons:[{
            iconUrl: '../assets/icons/close.svg',
            label: 'Close',
            onClick:() => {
                console.log("Closing  the item");
            }
        },{
            iconUrl: '../assets/icons/tick.svg',
            label: 'Confirm',
            onClick:() => {
                console.log("Confirming the item");
            }
        }
    ]
    },{
        duration: 1000,
        position: 'top-center',
        design: 'standard',
        type: 'success',
        classNames: ['border-left-5']
    });

    const t7 = toast.notify({
        title: 'Hi, there!',
        message: "Thank you for subscribing our service. For any help feel free to write us.",
        buttons:[{
            iconUrl: '../assets/icons/close.svg',
            label: 'Close',
            onClick:() => {
                console.log("Closing  the item");
            },
            type: 'default',
        },{
            label: 'Confirm',
            classes: [],
            onClick:() => {
                console.log("Confirming the item");
            },
            type: 'success'
        }
    ]
    },{
        duration: 1000,
        position: 'top-center',
        design: 'standard',
        'type': 'error',
    });
}

standardTestToastAlerts();
export default toast;
