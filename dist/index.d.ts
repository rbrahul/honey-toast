import { ToastOptions, ToastContent } from './type';
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
    close(Toast: any): void;
    closeAll(): void;
    update(Toast: any, Content: any, ToastOptions: any): void;
}
interface DomRemover {
    remove(): void;
}
declare class Toast implements ToastEntry {
    options: ToastOptions;
    content: ToastContent;
    delegator: ActionDelegator;
    mountedIn: HTMLElement;
    appearedAt: number;
    element: HTMLElement;
    domManager: DomRemover;
    constructor(content: ToastContent, options: ToastOptions, actionDelegator: ActionDelegator);
    close(): void;
    closeAll(): void;
    update(content: ToastContent, options: ToastOptions): void;
}
declare class ToastBaker {
    #private;
    options: ToastOptions;
    toasts: Toast[];
    notify(content: ToastContent, options?: ToastOptions): Toast;
    close(toast: Toast): void;
    update(toast: Toast, _: ToastContent, __: Partial<ToastOptions>): void;
    closeAll(): void;
    success(content: ToastContent, options: ToastOptions): Toast;
    info(content: ToastContent, options: ToastOptions): Toast;
    warn(content: ToastContent, options: ToastOptions): Toast;
    error(content: ToastContent, options: ToastOptions): Toast;
}
declare const _default: ToastBaker;
export default _default;
//# sourceMappingURL=index.d.ts.map