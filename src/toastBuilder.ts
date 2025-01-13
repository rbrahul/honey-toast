import BellIcon from '../assets/icons/bell.svg';
import CloseIcon from '../assets/icons/close.svg';
import TickIcon from '../assets/icons/tick.svg';
import WarningIcon from '../assets/icons/warning.svg';
import InfoIcon from '../assets/icons/info.svg';
import { DomSpec, toDom } from './dom';
import {
    Title,
    Button,
    IconWithText,
    StructuredContent,
    ToastContent,
    ToastBuilderProps,
} from './type';

const ICON_TYPE = {
    default: BellIcon,
    success: TickIcon,
    info: InfoIcon,
    warining: WarningIcon,
    danger: CloseIcon,
};

const classPrefix: string = 'rb-toast';

export const DEFAULT_TOAST_OPTIONS: ToastBuilderProps = {
    content: {
        title: 'Hi, John',
        message: 'I hope you are having a great day!',
        buttons: [],
    },
    isCloseable: true,
    type: 'default',
    design: 'minimal',
    hasIcon: true,
    hasProgressBar: false,
    classNames: [],
    theme: 'light',
    animation: 'fadeInFadeOut',
    icon: {
        url: undefined,
        size: 'small',
        classes: [],
    },
    duration: 3_000
};

export const prefix = (name: string) => {
    return `${classPrefix}-${name}`;
};

export const isHTMLElement = (value: unknown) =>
    typeof value === 'object' && 'tagName' in value && value instanceof HTMLElement;

class ToastAlert {
    #alertHtmlSpec: DomSpec;
    #options: ToastBuilderProps;
    constructor(options: ToastBuilderProps) {
        this.#options = {
            ...DEFAULT_TOAST_OPTIONS,
            ...options,
            icon: {
                ...DEFAULT_TOAST_OPTIONS.icon,
                ...(options?.icon ?? {}),
            },
        };

        if (typeof options.content === 'object' && !isHTMLElement(options.content)) {
            this.#options.content = {
                ...(DEFAULT_TOAST_OPTIONS.content as StructuredContent),
                ...options.content,
            };
        }
        this.#alertHtmlSpec = this.#initialiseContainer();
        return this;
    }

    #initialiseContainer() {
        return {
            tag: 'div',
            classes: [],
            children: [],
        };
    }

    addClasses() {
        let toastContainerClass = prefix('alert');
        const typeClass = this.#options?.type ? prefix(this.#options?.type) : prefix('default');
        const designClass = this.#options?.design
            ? prefix(this.#options?.design)
            : prefix('standard');
        const themeClass = this.#options?.theme ? prefix(this.#options?.theme) : prefix('light');

        if (this.#options.classNames) {
            this.#alertHtmlSpec.classes = [
                ...new Set([
                    toastContainerClass,
                    typeClass,
                    designClass,
                    themeClass,
                    ...this.#options.classNames,
                ]),
            ];
        }
        return this;
    }

    addTitle() {
        let title: Title = (this.#options?.content as StructuredContent)?.title;
        if (!title) {
            return this;
        }
        const element: DomSpec = {
            tag: 'div',
            classes: [prefix('title')],
            children: [],
        };
        if (title && typeof title === 'object') {
            if ((title as IconWithText).iconUrl) {
                element.children.push({
                    tag: 'img',
                    attrs: {
                        src: (title as IconWithText)?.iconUrl,
                    },
                    classes: [prefix('title-icon')],
                });
            }

            if ((title as IconWithText).text) {
                element.children.push({
                    tag: 'span',
                    text: (title as IconWithText).text,
                    classes: [prefix('title-text')],
                });
            }
        } else if (typeof title === 'string') {
            element.children.push({
                tag: 'span',
                html: title,
                classes: [prefix('title-text')],
            });
        }

        if ((this.#alertHtmlSpec.children as DomSpec[]).length === 0) {
            this.#alertHtmlSpec.children = [element];
        } else {
            this.#alertHtmlSpec.children[0] = element;
        }
        return this;
    }

    addBody() {
        const toastBody: DomSpec = {
            tag: 'div',
            classes: [prefix('body')],
            children: [],
        };
        if (isHTMLElement(this.#options.content)) {
            toastBody.children.push({
                tag: 'div',
                domElement: this.#options.content,
                classes: [],
            });
            this.#alertHtmlSpec.children.push(toastBody);
            return this;
        }
        if (this.#options.hasIcon !== false) {
            const iconElement = {
                tag: 'img',
                attrs: {
                    src: this.#options?.icon?.url
                        ? this.#options?.icon?.url
                        : (ICON_TYPE[this.#options?.type] ?? TickIcon),
                },
                classes: [prefix('alert-icon')],
            };
            if (this.#options?.icon?.size) {
                iconElement.classes.push(prefix(`alert-icon-${this.#options?.icon?.size}`));
            } else {
                iconElement.classes.push(prefix(`alert-icon-small`));
            }
            if (this.#options?.icon?.classes) {
                iconElement.classes.push(...this.#options?.icon?.classes);
            }
            toastBody.children.push(iconElement);
        }
        console.log("Message:",this.#options.content)
        if (
            typeof this.#options.content === 'object' &&
            (this.#options.content as StructuredContent)?.message
        ) {
            toastBody.children.push({
                tag: 'div',
                html: (this.#options.content as StructuredContent)?.message as string,
                classes: ['alert-content'],
            });
        } else if (typeof this.#options.content === 'string') {
            toastBody.children.push({
                tag: 'span',
                html: this.#options.content as string,
                classes: ['alert-content'],
            });
        }
        this.#alertHtmlSpec.children.push(toastBody);
        return this;
    }

    #cleateBtn(btn: Button): DomSpec {
        const btnElement: DomSpec = {
            tag: 'button',
            children: [],
            classes: [],
        };
        btnElement.classes = [prefix(`btn-${btn?.type ?? 'default'}`), ...(btn.classes ?? [])];
        if (btn.iconUrl) {
            const btnIcon: DomSpec = {
                tag: 'img',
                attrs: {
                    src: btn.iconUrl,
                },
                classes: [prefix('btn-icon-small')],
                events: {
                    onclick: btn.onClick ?? (() => {})
                }
            };
            btnElement.children.push(btnIcon);
        }
        if (btn.label !== undefined) {
            const btnElement: DomSpec = {
                tag: 'span',
                html: btn.label,
                classes: [prefix('btn-label')],
            };
            btnElement.children.push(btnElement);
        }
        return btnElement;
    }

    addActionButtons() {
        const content = this.#options.content as StructuredContent;
        if (typeof content !== 'object' || !Array.isArray(content?.buttons)) {
            return this;
        }
        if (content?.buttons.length > 0) {
            const buttonContainer: DomSpec = {
                tag: 'div',
                classes: ['alert-btn-group'],
                children: [],
            };
            buttonContainer.children = content?.buttons.map(this.#cleateBtn);
            this.#alertHtmlSpec.children.push(buttonContainer);
        }

        return this;
    }

    addProgressBar() {
        this.#alertHtmlSpec.children.push({
            tag: 'div',
            text: '',
            classes: ['alert-progress-bar'],
        });

        return this;
    }

    toHtml() {
        console.log('building spec:', this.#alertHtmlSpec);
        return toDom(this.#alertHtmlSpec);
    }
}

const isValidContent = (content: ToastContent) => (content && (typeof content === 'string' || (content as StructuredContent).title !== undefined || (content as StructuredContent)?.message !== undefined || isHTMLElement(content)))

export const createToast = (options: ToastBuilderProps) => {
    console.log("OPTIONS:", options)
    if(!isValidContent(options?.content)) {
        throw new Error(
            'Only string, HTMLElement or an object having keys title, message, buttons is supported as content',
        );
    }

    let toast = new ToastAlert(options);
    toast.addClasses().addBody();

    if (typeof options.content === 'object' && 'title' in options.content) {
        toast.addTitle();
    }
    return toast.addActionButtons().addProgressBar().toHtml();
};

/*
// Example use cases:
console.log('Default Toast', createToast(DEFAULT_TOAST_OPTIONS));
const element = document.createElement('form');
element.id = 'form';
element.action = '/send-mail.php';
element.enctype = 'multipart-form-data';

console.log(
    'Toast with Dom Element',
    createToast({
        ...DEFAULT_TOAST_OPTIONS,
        content: element,
    }),
);
console.log(isHTMLElement(element))
console.log("Success Toast", createToast({...DEFAULT_TOAST_OPTIONS, type: 'success'}))
console.log("Info Toast", createToast({...DEFAULT_TOAST_OPTIONS, type: 'info'}))
console.log("Warning Toast", createToast({...DEFAULT_TOAST_OPTIONS, type: 'warning'}))
console.log("Danger Toast", createToast({...DEFAULT_TOAST_OPTIONS, type: 'danger'}))*/
