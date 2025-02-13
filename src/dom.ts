export type EventHanlder = (e: Event | KeyboardEvent | MouseEvent | InputEvent) => void;

export type DomSpec = {
    tag: string;
    attrs?: Record<string, string>; // any atributes are allowed
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

const allowedTagNames = [
    'div',
    'section',
    'main',
    'header',
    'nav',
    'article',
    'footer',
    'aside',
    'strong',
    'iframe',
    'img',
    'canvas',
    'figure',
    'table',
    'thead',
    'tbody',
    'tr',
    'th',
    'td',
    'b',
    'i',
    'ul',
    'li',
    'span',
    'p',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'a',
    'input',
    'button'
];

const allowedAttrs = [
    'id',
    'style',
    'class',
    'alt',
    'target',
    'title',
    'href',
    'focus',
    'src',
    'srcset',
    'type',
    'action',
    'rows',
    'cols',
    'selected',
    'value',
    'checked',
    'placeholder',
    'disabled',
    'readonly',
    'min',
    'max',
    'step',
    'name',
    'for',
    'tabindex',
    'autocomplete',
    'autofocus',
    'required',
    'multiple',
    'pattern',
    'download',
    'method',
    'enctype',
    'novalidate',
    'formaction',
    'disabled',
    'dirname',
    'dir',
    'colspan',
    'rowspan',
    'allow',
    'accept',
    'charset',
];

const pick = <T>(record: object, keys: string[]): Record<string, T> => {
    const recordsWithPickedEntries: Record<string, T> = {};
    keys.forEach(key => {
        if (key in record) {
            recordsWithPickedEntries[key] = record[key];
        }
    });
    return recordsWithPickedEntries;
};

const addAttrs = (element: HTMLElement, atributes: Record<string, string>) => {
    for (const [atribute, value] of Object.entries(atributes)) {
        element.setAttribute(atribute, value);
    }
};

const isObject = (value: unknown): value is Record<string, unknown> => {
    return typeof value === 'object' && value !== null;
}

const bindEvents = (element: HTMLElement, eventMap: Record<string, EventHanlder>) => {
    if (!isObject(eventMap)) return;

    for (const [name, handlerFn] of Object.entries(eventMap)) {
        element.addEventListener(name, handlerFn);
    }
};

const createFragment = ():HTMLElement => {
    const fragment:unknown = new DocumentFragment();
    return fragment as HTMLElement;
};

const buildDom = (spec: DomSpec | DomSpec[], parent?: HTMLElement):HTMLElement => {
    parent = parent ?? createFragment();

    if (Array.isArray(spec)) {
        spec.forEach(currentSpec => buildDom(currentSpec, parent));
        return parent;
    }

    if (!spec || !spec?.tag) {
        return parent;
    }

    if (spec.domElement) {
        parent.appendChild(spec.domElement)
        return parent;
    }

    const tagName = spec.tag.toLocaleLowerCase();
    if (allowedTagNames.includes(tagName)) {
        const element = document.createElement(tagName);
        if (element) {
            if (spec.attrs && typeof spec.attrs === 'object') {
                addAttrs(element, spec.attrs);
            }

           const extractAdditionalAttrs = pick<string>(spec, allowedAttrs);
           addAttrs(element, extractAdditionalAttrs);

            if (spec.classes && Array.isArray(spec.classes)) {
                element.classList.add(...spec.classes);
            }
    
            bindEvents(element, spec?.events);

            if (spec.children) {
                 buildDom(spec.children, element);
            } else {
                if (spec.html !== undefined) {
                    element.innerHTML = spec.html;
                } else if (spec.text !== undefined) {
                    element.textContent = spec.text;
                }
            }
            parent.appendChild(element);
        }
    }
    return parent;
};

export const toDom = (specs: DomSpec | DomSpec[]):HTMLElement => {
    return buildDom(specs)?.childNodes?.[0] as HTMLElement;// excluding temporary root
};

/*
// Create Html Element from Javascript Oject Literal 
//Example usage:
const myDomSpec: DomSpec = {
    tag: 'div',
    id: 'first',
    style: 'background: red;',
    events: {
        "click": (e:Event) => {console.log("Clicked:", e)},
    },
    children: [
        {
            tag: 'h3',
            text: 'I am title',
            classes: ['title', 'heading'],
            attrs: {
                title: 'Example Title',
                'data-uuid': '1234567',
            },
        },

        {
            tag: 'p',
            text: 'I sub heading',
            classes: ['sub-headding'],
        },
        {
            tag: 'div',
            classes: ['form-control'],
            html: `<input type="text" value="10" tabindex="0"/>`,
        },
    ],
};

console.log(toDom(myDomSpec))
*/
