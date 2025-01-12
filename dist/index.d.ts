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
interface ToastEntry {
    mountedIn: HTMLElement;
    element: HTMLElement;
    options: Partial<Options>;
    appearedAt: number;
}
interface ActionDelegator {
    close(ToastEntry: any): void;
    update(ToastEntry: any, Content: any, Options: any): void;
}
declare class Toast implements ToastEntry {
    options: Partial<Options>;
    content: Content;
    delegator: ActionDelegator;
    mountedIn: HTMLElement;
    appearedAt: number;
    element: HTMLElement;
    constructor(content: Content, options: Partial<Options>, actionDelegator: ActionDelegator);
    close(): void;
    update(content: Content, options: Options): void;
}
declare class ToastBaker {
    #private;
    options: Options;
    toasts: Toast[];
    notify(content: Content, options: Partial<Options>): Toast;
    close(toast: Toast): void;
    update(toast: Toast, content: Content, options: Partial<Options>): void;
    closeAll(): void;
}
declare const toast: ToastBaker;
export default toast;
//# sourceMappingURL=index.d.ts.map