import { isHTMLElement } from './toastBuilder';
import { ToastContent, ToastBuilderProps, AnimationType } from './type';

const assertBoolean = (value: unknown, filedName: string) => {
    if (typeof value !== 'boolean') {
        throw new Error(`'${filedName}' must be boolean`);
    }
};

const assertAnyOf = (value: unknown, allowedValues: string[], filedName: string) => {
    if (!allowedValues.includes(value as string)) {
        throw new Error(`'${filedName}' must be either one of these ${allowedValues}`);
    }
};

const assertNotEmptyArrayOfType = (value: unknown, type: string, filedName: string) => {
    if (
        !Array.isArray(value) ||
        (Array.isArray(value) && value.length > 0 && typeof value?.[0] !== type)
    ) {
        throw new Error(`'${filedName}' must be an array of ${type}`);
    }
};

const assertIsFunction = (value: unknown, filedName: string) => {
    if (typeof value !== 'function') {
        throw new Error(`'${filedName}' must be a function`);
    }
};

export const validateOptions = (options: ToastBuilderProps) => {
    const rules = {
        content: (content: ToastContent) => {
            if (!content) {
                throw new Error('Content is required');
            }
            if (
                typeof content !== 'string' &&
                !isHTMLElement(content) &&
                !content.title &&
                !content.message
            ) {
                throw new Error(
                    'Content must be either string, HTMLElement or an object having keys title, message and buttons',
                );
            }
        },

        isCloseable: (isCloseable: boolean) => {
            assertBoolean(isCloseable, 'isCloseable');
        },

        autoClose: (autoClose: boolean) => {
            assertBoolean(autoClose, 'autoClose');
        },

        type: (type: string) => {
            assertAnyOf(type, ['default', 'success', 'info', 'warning', 'error'], 'type');
        },

        design: (design: string) => {
            assertAnyOf(design, ['minimal', 'standard', 'colorful', 'gradient'], 'design');
        },

        position: (position: string) => {
            assertAnyOf(
                position,
                ['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'center'],
                'position',
            );
        },

        hasIcon: (hasIcon: boolean) => {
            assertBoolean(hasIcon, 'hasIcon');
        },

        hasProgressBar: (hasProgressBar: boolean) => {
            assertBoolean(hasProgressBar, 'hasProgressBar');
        },

        progress: (progress: boolean) => {
            if (progress !== undefined && typeof progress !== 'number') {
                throw new Error('progress must be number >= 0 and <= 100');
            }
        },

        classNames: (classNames: boolean) => {
            if (
                classNames !== undefined &&
                (!Array.isArray(classNames) ||
                    (Array.isArray(classNames) &&
                        classNames.length > 0 &&
                        typeof classNames?.[0] !== 'string'))
            ) {
                throw new Error('classNames must be an array of strings');
            }
        },

        theme: (theme: string) => {
            assertAnyOf(theme, ['light', 'dark', 'system'], 'theme');
        },

        animation: (animation: AnimationType) => {
            assertAnyOf(animation, ['slide', 'bounce', 'fade', 'zoom'], 'animation');
        },

        icon: (icon: { url?: string; size?: 'small' | 'medium' | 'large'; classes?: string[] }) => {
            if (icon !== undefined && typeof icon !== 'object') {
                throw new Error('icon must be an object');
            }
            if (icon?.url && typeof icon.url !== 'string') {
                throw new Error('icon.url must be a string');
            }

            if (typeof icon?.size !== 'undefined') {
                assertAnyOf(icon.size, ['small', 'medium', 'large'], 'icon.size');
            }

            if (icon.classes) {
                assertNotEmptyArrayOfType(icon.classes, 'string', 'icon.classes');
            }
        },

        offset: (offset: { x: number; y: number }) => {
            if (offset !== undefined && typeof offset !== 'object') {
                throw new Error('offset must be an object with x and y keys');
            }
        },

        duration: (duration: number) => {
            if (duration && (typeof duration !== 'number' || duration < 0)) {
                throw new Error('duration must be a number >= 0');
            }
        },
        onClose: (onClose: () => void) => {
            assertIsFunction(onClose, 'onClose');
        },
        onShow: (onShow: () => void) => {
            assertIsFunction(onShow, 'onShow');
        },
    };
    Object.keys(rules).forEach(key => {
        if (options[key] !== undefined) {
            rules[key](options[key]);
        }
    });
};
