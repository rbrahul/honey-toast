import BellIcon from '../assets/icons/bell.svg';
import CloseIcon from '../assets/icons/close.svg';
import TickIcon from '../assets/icons/tick.svg';
import WarningIcon from '../assets/icons/warning.svg';
import InfoIcon from '../assets/icons/info.svg';
import { DomSpec, toDom } from './domBuilder';
import {
    Title,
    Button,
    IconWithText,
    StructuredContent,
    ToastContent,
    ToastBuilderProps,
    AnimationType,
} from './type';

const ICON_TYPE = {
    default: BellIcon,
    success: TickIcon,
    info: InfoIcon,
    warining: WarningIcon,
    error: CloseIcon,
};

const classPrefix: string = 'rb-toast';

export const prefix = (name: string) => {
    return `${classPrefix}-${name}`;
};

export const DEFAULT_TOAST_OPTIONS: ToastBuilderProps = {
    content: {
        title: 'Hi, there!',
        message: 'I hope you are having a great day!',
        buttons: [],
    },
    isCloseable: true,
    autoClose: true,
    type: 'default',
    design: 'minimal',
    position: 'top-right',
    hasIcon: true,
    hasProgressBar: false,
    progress: 0,
    classNames: [],
    theme: 'light',
    animation: 'slide' as AnimationType,
    icon: {
        url: undefined,
        size: 'small',
        classes: [],
    },
    offset: {
        x: 30,
        y: 30,
    },
    duration: 3_000,
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
        const toastContainerClass = prefix('alert');
        const typeClass = this.#options?.type ? prefix(this.#options?.type) : prefix('default');
        const designClass = this.#options?.design
            ? prefix(this.#options?.design)
            : prefix('standard');
        const themeClass = this.#options?.theme ? prefix(this.#options?.theme) : prefix('light');
        this.#alertHtmlSpec.classes = [toastContainerClass, typeClass, designClass, themeClass];
        if (this.#options.classNames) {
            this.#alertHtmlSpec.classes = [
                ...new Set([...this.#alertHtmlSpec.classes, ...this.#options.classNames]),
            ];
        }
        return this;
    }

    createTitle(): DomSpec {
        const title: Title = (this.#options?.content as StructuredContent)?.title;
        if (!title) {
            return;
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

        return element;
    }

    addBody() {
        const contentContainer: DomSpec = {
            tag: 'div',
            classes: [prefix('content-wrapper')],
            children: [],
        };
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
        if (this.#options.hasIcon) {
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
                iconElement.classes.push(...(this.#options?.icon?.classes ?? []));
            }
            contentContainer.children.push(iconElement);
        }
        if (
            typeof this.#options.content === 'object' &&
            (this.#options.content as StructuredContent)?.message
        ) {
            toastBody.children.push({
                tag: 'div',
                html: (this.#options.content as StructuredContent)?.message as string,
                classes: [prefix('message')],
            });
        } else if (typeof this.#options.content === 'string') {
            toastBody.children.push({
                tag: 'span',
                html: this.#options.content as string,
                classes: [prefix('message')],
            });
        }

        const title = this.createTitle();
        if (title) {
            if (toastBody.children) {
                toastBody.children.unshift(title);
            }
        }

        contentContainer.children.push(toastBody);
        this.#alertHtmlSpec.children.push(contentContainer);
        return this;
    }

    #cleateBtn(btn: Button): DomSpec {
        const btnElement: DomSpec = {
            tag: 'button',
            children: [],
            classes: [],
            events: {
                click: btn.onClick ?? (() => {}),
            },
        };

        btnElement.classes = [
            prefix('btn'),
            prefix(`btn-${btn?.type ?? 'default'}`),
            ...(btn.classes ?? []),
        ];
        if (btn.iconUrl) {
            const btnIcon: DomSpec = {
                tag: 'img',
                attrs: {
                    src: btn.iconUrl,
                },
                classes: [prefix('btn-icon-small')],
            };
            btnElement.children.push(btnIcon);
        }
        if (btn.label !== undefined) {
            const label: DomSpec = {
                tag: 'span',
                html: btn.label,
                classes: [prefix('btn-label')],
            };
            btnElement.children.push(label);
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
                classes: [prefix('alert-btn-group')],
                children: [],
            };
            buttonContainer.children = content?.buttons.map(this.#cleateBtn);
            this.#alertHtmlSpec.children.push(buttonContainer);
        }

        return this;
    }

    addCloseBtn() {
        if (this.#options.isCloseable) {
            const closeBtn: DomSpec = {
                tag: 'span',
                html: '&#10005;',
                classes: [prefix('close-btn')],
            };
            this.#alertHtmlSpec.children.push(closeBtn);
        }
        return this;
    }

    addProgressBar() {
        if (this.#options.hasProgressBar) {
            this.#alertHtmlSpec.children.push({
                tag: 'div',
                text: '',
                classes: [prefix('alert-progress-bar')],
                children: [
                    {
                        tag: 'div',
                        text: '',
                        classes: [prefix('alert-progress-bar-fill')],
                    },
                ],
            });
        }

        return this;
    }

    toHtml() {
        return toDom(this.#alertHtmlSpec);
    }
}

const isValidContent = (content: ToastContent) =>
    content &&
    (typeof content === 'string' ||
        (content as StructuredContent).title !== undefined ||
        (content as StructuredContent)?.message !== undefined ||
        isHTMLElement(content));

export const createToast = (options: ToastBuilderProps): HTMLElement => {
    if (!isValidContent(options?.content)) {
        throw new Error(
            'Only string, HTMLElement or an object having keys title, message, buttons is supported as content',
        );
    }

    const toast = new ToastAlert(options);
    return toast.addClasses().addBody().addActionButtons().addCloseBtn().addProgressBar().toHtml();
};
