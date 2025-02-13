export type IconWithText = {
    iconUrl: string;
    text: string;
};

export type Title =
    | IconWithText
    | string
    | HTMLDivElement
    | HTMLHeadingElement
    | HTMLParagraphElement;

export type ToastMessage = string | HTMLElement;

export type CustomAnimation = {
    enter: string; // css class that will be applied to the toast when it enters
    exit: string;  // css class that will be applied to the toast when it exists
}

export type Animation = 'slide' | 'fade' | 'zoom' | 'bounce';

export type Button = {
    iconUrl?: string;
    label?: string;
    type?: 'default' | 'success' | 'info' | 'warning' | 'error';
    classes?: string[];
    onClick: () => void;
};

export type StructuredContent = {
    title?: Title;
    message?: ToastMessage;
    buttons?: Button[];
};

export type ToastContent = string | StructuredContent | HTMLElement

export type ToastOptions = {
    isCloseable?: boolean;
    hasProgressBar?: boolean;
    hasIcon?: boolean;
    classNames?: string[];
    type?: 'default' | 'success' | 'info' | 'warning' | 'error';
    theme?: 'light' | 'dark' | 'system';
    design?: 'minimal' | 'standard' | 'colorful' | 'gradient';
    animation?: Animation | CustomAnimation;
    position?: 'top-left' | 'top-right' | 'top-center' | 'center' | 'bottom-left' | 'bottom-right',
    offset?: { // ignores the stack position
        x: number,
        y: number
    }
    icon?: {
        url: string;
        size: 'small' | 'medium' | 'large';
        classes: string[];
    };
    duration?: number;
    autoClose?: boolean;
    container?: HTMLElement,
    onClose?: () => void;
    onShow?: () => void;
};

export type ToastBuilderProps = {
    content: ToastContent
} & ToastOptions;
