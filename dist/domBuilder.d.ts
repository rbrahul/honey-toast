export type EventHanlder = (e: Event | KeyboardEvent | MouseEvent | InputEvent) => void;
export type DomSpec = {
    tag: string;
    attrs?: Record<string, string>;
    classes?: string[];
    text?: string;
    html?: string;
    domElement?: HTMLElement;
    id?: string;
    style?: string;
    alt?: string;
    target?: string;
    title?: string;
    type?: string;
    value?: string | number | boolean;
    events?: Record<string, EventHanlder>;
    children?: DomSpec[];
    action?: string;
};
export declare const toDom: (specs: DomSpec | DomSpec[]) => HTMLElement;
//# sourceMappingURL=domBuilder.d.ts.map