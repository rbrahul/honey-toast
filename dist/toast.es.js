var J = Object.defineProperty;
var D = (s) => {
  throw TypeError(s);
};
var Q = (s, t, e) => t in s ? J(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var c = (s, t, e) => Q(s, typeof t != "symbol" ? t + "" : t, e), A = (s, t, e) => t.has(s) || D("Cannot " + e);
var o = (s, t, e) => (A(s, t, "read from private field"), e ? e.call(s) : t.get(s)), b = (s, t, e) => t.has(s) ? D("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(s) : t.set(s, e), T = (s, t, e, i) => (A(s, t, "write to private field"), i ? i.call(s, e) : t.set(s, e), e), p = (s, t, e) => (A(s, t, "access private method"), e);
const R = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.0016%202.00098C12.4158%202.00098%2012.7516%202.33676%2012.7516%202.75098V3.53801C16.5416%203.9143%2019.5016%207.11197%2019.5016%2011.001V14.115L20.1938%2015.9609C20.7454%2017.4319%2019.6581%2019.001%2018.0871%2019.001H15.0628C15.0287%2020.6631%2013.6701%2021.9995%2011.9998%2021.9995C10.3295%2021.9995%208.97089%2020.6631%208.93682%2019.001H5.9161C4.34514%2019.001%203.25776%2017.4319%203.80936%2015.9609L4.5016%2014.115V11.001C4.5016%207.11197%207.46161%203.9143%2011.2516%203.53801V2.75098C11.2516%202.33676%2011.5874%202.00098%2012.0016%202.00098ZM10.4375%2019.001C10.471%2019.8339%2011.1573%2020.4995%2011.9998%2020.4995C12.8423%2020.4995%2013.5286%2019.8339%2013.5622%2019.001H10.4375ZM6.0016%2011.001C6.0016%207.68727%208.68789%205.00098%2012.0016%205.00098C15.3153%205.00098%2018.0016%207.68727%2018.0016%2011.001V14.1168C18.0016%2014.2955%2018.0337%2014.4727%2018.0965%2014.64L18.7893%2016.4876C18.9732%2016.9779%2018.6108%2017.501%2018.0871%2017.501H5.9161C5.39244%2017.501%205.02998%2016.9779%205.21385%2016.4876L5.90673%2014.64C5.96946%2014.4727%206.0016%2014.2955%206.0016%2014.1168V11.001Z'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e", X = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20d='M6.21967%207.28033C5.92678%206.98744%205.92678%206.51256%206.21967%206.21967C6.51256%205.92678%206.98744%205.92678%207.28033%206.21967L11.999%2010.9384L16.7176%206.2198C17.0105%205.92691%2017.4854%205.92691%2017.7782%206.2198C18.0711%206.51269%2018.0711%206.98757%2017.7782%207.28046L13.0597%2011.999L17.7782%2016.7176C18.0711%2017.0105%2018.0711%2017.4854%2017.7782%2017.7782C17.4854%2018.0711%2017.0105%2018.0711%2016.7176%2017.7782L11.999%2013.0597L7.28033%2017.7784C6.98744%2018.0713%206.51256%2018.0713%206.21967%2017.7784C5.92678%2017.4855%205.92678%2017.0106%206.21967%2016.7177L10.9384%2011.999L6.21967%207.28033Z'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e", N = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20d='M19.2803%206.76264C19.5732%207.05553%2019.5732%207.53041%2019.2803%207.8233L9.86348%2017.2402C9.57058%2017.533%209.09571%2017.533%208.80282%2017.2402L4.71967%2013.157C4.42678%2012.8641%204.42678%2012.3892%204.71967%2012.0963C5.01256%2011.8035%205.48744%2011.8035%205.78033%2012.0963L9.33315%2015.6492L18.2197%206.76264C18.5126%206.46975%2018.9874%206.46975%2019.2803%206.76264Z'%20fill='%23ffffff'/%3e%3c/svg%3e", tt = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20d='M16.6272%204.49741C17.0414%204.49741%2017.3772%204.8332%2017.3772%205.24741V6.9957C17.3772%207.40992%2017.0414%207.7457%2016.6272%207.7457C16.213%207.7457%2015.8772%207.40992%2015.8772%206.9957V5.24741C15.8772%204.8332%2016.213%204.49741%2016.6272%204.49741Z'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20d='M15.8262%209.49781C15.8262%209.05598%2016.1844%208.69781%2016.6262%208.69781C17.068%208.69781%2017.4272%209.05598%2017.4272%209.49781C17.4272%209.93964%2017.069%2010.2978%2016.6272%2010.2978C16.1854%2010.2978%2015.8262%209.93964%2015.8262%209.49781Z'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.2517%207.375C11.2517%204.40647%2013.6582%202%2016.6267%202C19.5952%202%2022.0017%204.40647%2022.0017%207.375C22.0017%2010.3435%2019.5952%2012.75%2016.6267%2012.75C13.6582%2012.75%2011.2517%2010.3435%2011.2517%207.375ZM16.6267%203.5C14.4866%203.5%2012.7517%205.2349%2012.7517%207.375C12.7517%209.5151%2014.4866%2011.25%2016.6267%2011.25C18.7668%2011.25%2020.5017%209.5151%2020.5017%207.375C20.5017%205.2349%2018.7668%203.5%2016.6267%203.5Z'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10.8913%203.58234C7.27568%204.11887%204.5016%207.23584%204.5016%2011.0007V14.1147L3.80936%2015.9607C3.25776%2017.4316%204.34514%2019.0007%205.9161%2019.0007H8.93682C8.97089%2020.6629%2010.3295%2021.9993%2011.9998%2021.9993C13.6701%2021.9993%2015.0287%2020.6629%2015.0628%2019.0007H18.0871C19.6581%2019.0007%2020.7454%2017.4316%2020.1938%2015.9607L19.5016%2014.1147V13.6218C19.0282%2013.84%2018.5257%2014.006%2018.0016%2014.1124V14.1166C18.0016%2014.2952%2018.0337%2014.4724%2018.0965%2014.6397L18.7893%2016.4874C18.9732%2016.9777%2018.6108%2017.5007%2018.0871%2017.5007H5.9161C5.39244%2017.5007%205.02998%2016.9777%205.21385%2016.4874L5.90673%2014.6397C5.96946%2014.4724%206.0016%2014.2952%206.0016%2014.1166V11.0007C6.0016%208.36516%207.70092%206.12648%2010.0637%205.32059C10.2582%204.69854%2010.5387%204.11448%2010.8913%203.58234ZM11.9998%2020.4993C11.1573%2020.4993%2010.471%2019.8337%2010.4375%2019.0007H13.5622C13.5286%2019.8337%2012.8423%2020.4993%2011.9998%2020.4993Z'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e", et = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20d='M12.0006%204.5C11.2951%204.5%2010.7329%205.09006%2010.7671%205.79476L11.2515%2015.7858C11.2709%2016.1855%2011.6005%2016.4995%2012.0006%2016.4995C12.4007%2016.4995%2012.7304%2016.1855%2012.7497%2015.7858L13.2341%205.79476C13.2683%205.09006%2012.7061%204.5%2012.0006%204.5Z'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20d='M11.9994%2017.85C11.5023%2017.85%2011.0994%2018.2529%2011.0994%2018.75C11.0994%2019.2471%2011.5023%2019.65%2011.9994%2019.65H12.0004C12.4974%2019.65%2012.9004%2019.2471%2012.9004%2018.75C12.9004%2018.2529%2012.4974%2017.85%2012.0004%2017.85H11.9994Z'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e", st = [
  "div",
  "section",
  "main",
  "header",
  "nav",
  "article",
  "footer",
  "aside",
  "strong",
  "iframe",
  "img",
  "canvas",
  "figure",
  "table",
  "thead",
  "tfoot",
  "tbody",
  "col",
  "colgroup",
  "tr",
  "th",
  "td",
  "b",
  "i",
  "ol",
  "ul",
  "li",
  "span",
  "p",
  "pre",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "a",
  "input",
  "button",
  "select",
  "option",
  "optgroup",
  "svg",
  "path",
  "polygon",
  "circle",
  "rect",
  "ellipse",
  "line",
  "polyline",
  "g",
  "defs",
  "symbol",
  "use",
  "form",
  "blockquote",
  "label",
  "textarea",
  "fieldset",
  "hr",
  "menu",
  "video",
  "audio",
  "code",
  "sub",
  "sup",
  "u",
  "em",
  "s",
  "small",
  "slot",
  "template",
  "progress",
  "meter",
  "time",
  "abbr",
  "address",
  "area",
  "html",
  "head",
  "body",
  "title",
  "meta",
  "link",
  "style",
  "script",
  "noscript",
  "base",
  "details",
  "dialog",
  "summary",
  "fieldset",
  "legend",
  "datalist",
  "caption",
  "br",
  "output",
  "object",
  "wbr",
  "q",
  "dl",
  "dt",
  "dd",
  "del",
  "ins",
  "bdi",
  "bdo"
], it = [
  "id",
  "style",
  "class",
  "alt",
  "target",
  "title",
  "href",
  "focus",
  "src",
  "srcset",
  "type",
  "action",
  "rows",
  "cols",
  "selected",
  "value",
  "checked",
  "placeholder",
  "disabled",
  "readonly",
  "min",
  "max",
  "step",
  "name",
  "for",
  "tabindex",
  "autocomplete",
  "autofocus",
  "required",
  "multiple",
  "pattern",
  "download",
  "method",
  "enctype",
  "novalidate",
  "formaction",
  "disabled",
  "dirname",
  "dir",
  "colspan",
  "rowspan",
  "allow",
  "accept",
  "charset",
  "scope",
  "async",
  "data",
  "defer",
  "crossorigin",
  "integrity",
  "referrerpolicy",
  "sandbox",
  "sizes",
  "width",
  "height"
], nt = (s, t) => {
  const e = {};
  return t.forEach((i) => {
    i in s && (e[i] = s[i]);
  }), e;
}, z = (s, t) => {
  for (const [e, i] of Object.entries(t))
    s.setAttribute(e, i);
}, ot = (s) => typeof s == "object" && s !== null, at = (s, t) => {
  if (ot(t))
    for (const [e, i] of Object.entries(t))
      s.addEventListener(e, i);
}, rt = () => new DocumentFragment(), P = (s, t) => {
  if (t = t ?? rt(), Array.isArray(s))
    return s.forEach((i) => P(i, t)), t;
  if (!s || !(s != null && s.tag))
    return t;
  if (s.domElement)
    return t.appendChild(s.domElement), t;
  const e = s.tag.toLocaleLowerCase();
  if (st.includes(e)) {
    const i = document.createElement(e);
    if (i) {
      s.attrs && typeof s.attrs == "object" && z(i, s.attrs);
      const n = nt(s, it);
      z(i, n), s.classes && Array.isArray(s.classes) && i.classList.add(...s.classes), at(i, s == null ? void 0 : s.events), s.children ? P(s.children, i) : s.html !== void 0 ? i.innerHTML = s.html : s.text !== void 0 && (i.textContent = s.text), t.appendChild(i);
    }
  }
  return t;
}, lt = (s) => {
  var t, e;
  return (e = (t = P(s)) == null ? void 0 : t.childNodes) == null ? void 0 : e[0];
}, ht = {
  default: R,
  success: N,
  info: et,
  warining: tt,
  error: X
}, dt = "rb-toast", a = (s) => `${dt}-${s}`, w = {
  content: {
    title: "Hi, there!",
    message: "I hope you are having a great day!",
    buttons: []
  },
  isCloseable: !0,
  autoClose: !0,
  type: "default",
  design: "minimal",
  position: "top-right",
  hasIcon: !0,
  hasProgressBar: !1,
  progress: 0,
  classNames: [],
  theme: "light",
  animation: a("slide"),
  icon: {
    url: void 0,
    size: "small",
    classes: []
  },
  offset: {
    x: 30,
    y: 30
  },
  duration: 3e3
}, M = (s) => typeof s == "object" && "tagName" in s && s instanceof HTMLElement;
var d, r, v, _, U;
class ct {
  constructor(t) {
    b(this, v);
    b(this, d);
    b(this, r);
    return T(this, r, {
      ...w,
      ...t,
      icon: {
        ...w.icon,
        ...(t == null ? void 0 : t.icon) ?? {}
      }
    }), typeof t.content == "object" && !M(t.content) && (o(this, r).content = {
      ...w.content,
      ...t.content
    }), T(this, d, p(this, v, _).call(this)), this;
  }
  addClasses() {
    var l, f, m, u, C, g;
    const t = a("alert"), e = (l = o(this, r)) != null && l.type ? a((f = o(this, r)) == null ? void 0 : f.type) : a("default"), i = (m = o(this, r)) != null && m.design ? a((u = o(this, r)) == null ? void 0 : u.design) : a("standard"), n = (C = o(this, r)) != null && C.theme ? a((g = o(this, r)) == null ? void 0 : g.theme) : a("light");
    return o(this, d).classes = [t, e, i, n], o(this, r).classNames && (o(this, d).classes = [
      .../* @__PURE__ */ new Set([...o(this, d).classes, ...o(this, r).classNames])
    ]), this;
  }
  createTitle() {
    var i, n;
    const t = (n = (i = o(this, r)) == null ? void 0 : i.content) == null ? void 0 : n.title;
    if (!t)
      return;
    const e = {
      tag: "div",
      classes: [a("title")],
      children: []
    };
    return t && typeof t == "object" ? (t.iconUrl && e.children.push({
      tag: "img",
      attrs: {
        src: t == null ? void 0 : t.iconUrl
      },
      classes: [a("title-icon")]
    }), t.text && e.children.push({
      tag: "span",
      text: t.text,
      classes: [a("title-text")]
    })) : typeof t == "string" && e.children.push({
      tag: "span",
      html: t,
      classes: [a("title-text")]
    }), e;
  }
  addBody() {
    var n, l, f, m, u, C, g, $, I, S, j, V, Z, O, k;
    const t = {
      tag: "div",
      classes: [a("content-wrapper")],
      children: []
    }, e = {
      tag: "div",
      classes: [a("body")],
      children: []
    };
    if (M(o(this, r).content))
      return e.children.push({
        tag: "div",
        domElement: o(this, r).content,
        classes: []
      }), o(this, d).children.push(e), this;
    if (o(this, r).hasIcon) {
      const E = {
        tag: "img",
        attrs: {
          src: (l = (n = o(this, r)) == null ? void 0 : n.icon) != null && l.url ? (m = (f = o(this, r)) == null ? void 0 : f.icon) == null ? void 0 : m.url : ht[(u = o(this, r)) == null ? void 0 : u.type] ?? N
        },
        classes: [a("alert-icon")]
      };
      (g = (C = o(this, r)) == null ? void 0 : C.icon) != null && g.size ? E.classes.push(a(`alert-icon-${(I = ($ = o(this, r)) == null ? void 0 : $.icon) == null ? void 0 : I.size}`)) : E.classes.push(a("alert-icon-small")), (j = (S = o(this, r)) == null ? void 0 : S.icon) != null && j.classes && E.classes.push(...(Z = (V = o(this, r)) == null ? void 0 : V.icon) == null ? void 0 : Z.classes), t.children.push(E);
    }
    typeof o(this, r).content == "object" && ((O = o(this, r).content) != null && O.message) ? e.children.push({
      tag: "div",
      html: (k = o(this, r).content) == null ? void 0 : k.message,
      classes: [a("message")]
    }) : typeof o(this, r).content == "string" && e.children.push({
      tag: "span",
      html: o(this, r).content,
      classes: [a("message")]
    });
    const i = this.createTitle();
    return i && e.children && e.children.unshift(i), t.children.push(e), o(this, d).children.push(t), this;
  }
  addActionButtons() {
    const t = o(this, r).content;
    if (typeof t != "object" || !Array.isArray(t == null ? void 0 : t.buttons))
      return this;
    if ((t == null ? void 0 : t.buttons.length) > 0) {
      const e = {
        tag: "div",
        classes: [a("alert-btn-group")],
        children: []
      };
      e.children = t == null ? void 0 : t.buttons.map(p(this, v, U)), o(this, d).children.push(e);
    }
    return this;
  }
  addCloseBtn() {
    if (o(this, r).isCloseable) {
      const t = {
        tag: "span",
        html: "&#10005;",
        classes: [a("close-btn")]
      };
      o(this, d).children.push(t);
    }
    return this;
  }
  addProgressBar() {
    return o(this, r).hasProgressBar && o(this, d).children.push({
      tag: "div",
      text: "",
      classes: [a("alert-progress-bar")],
      children: [
        {
          tag: "div",
          text: "",
          classes: [a("alert-progress-bar-fill")]
        }
      ]
    }), this;
  }
  toHtml() {
    return lt(o(this, d));
  }
}
d = new WeakMap(), r = new WeakMap(), v = new WeakSet(), _ = function() {
  return {
    tag: "div",
    classes: [],
    children: []
  };
}, U = function(t) {
  const e = {
    tag: "button",
    children: [],
    classes: [],
    events: {
      click: t.onClick ?? (() => {
      })
    }
  };
  if (e.classes = [
    a("btn"),
    a(`btn-${(t == null ? void 0 : t.type) ?? "default"}`),
    ...t.classes ?? []
  ], t.iconUrl) {
    const i = {
      tag: "img",
      attrs: {
        src: t.iconUrl
      },
      classes: [a("btn-icon-small")]
    };
    e.children.push(i);
  }
  if (t.label !== void 0) {
    const i = {
      tag: "span",
      html: t.label,
      classes: [a("btn-label")]
    };
    e.children.push(i);
  }
  return e;
};
const ft = (s) => s && (typeof s == "string" || s.title !== void 0 || (s == null ? void 0 : s.message) !== void 0 || M(s)), F = (s) => {
  if (!ft(s == null ? void 0 : s.content))
    throw new Error(
      "Only string, HTMLElement or an object having keys title, message, buttons is supported as content"
    );
  return new ct(s).addClasses().addBody().addActionButtons().addCloseBtn().addProgressBar().toHtml();
}, L = () => {
}, mt = {
  animationClassPrefix: "",
  animationKind: "animation",
  // event is dispatched once *-enter class is added and dom is staring to appear
  onEnter: L,
  // event is dispatched once *-enter class already added and animationKindend event was triggered
  onEntered: L,
  // event is dispatched once *-exits class is added and dom is staring to disappear
  onExit: L,
  // event is dispatched once *-exit class already added and animationKindend event was triggered
  onExited: L,
  // if there is no transtionend or animationend event is triggered after this timeout, it will go to the next phase -entered or -exited
  animationTimeout: 500
}, K = (s) => typeof s == "object" && ((s || {}).tagName || (s == null ? void 0 : s.nodeName));
var x, y;
class ut {
  constructor(t, e) {
    c(this, "options");
    c(this, "node");
    b(this, x, () => {
      var t, e;
      (e = (t = this.node) == null ? void 0 : t.classList) != null && e.contains(`${this.options.animationClassPrefix}-enter`) && (this.node.classList.remove(`${this.options.animationClassPrefix}-enter`), this.node.classList.add(`${this.options.animationClassPrefix}-entered`), this.cleanupAnimationEventListners("enter"), typeof this.options.onEntered == "function" && this.options.onEntered());
    });
    b(this, y, () => {
      var t, e, i;
      (e = (t = this.node) == null ? void 0 : t.classList) != null && e.contains(`${this.options.animationClassPrefix}-exit`) && (this.node.classList.remove(`${this.options.animationClassPrefix}-exit`), this.node.classList.add(`${this.options.animationClassPrefix}-exited`), this.cleanupAnimationEventListners("exit"), (i = this.node) == null || i.remove(), typeof this.options.onExited == "function" && this.options.onExited());
    });
    this.options = {
      ...mt,
      ...e || {}
    }, this.node = t, this.validate();
  }
  validate() {
    var t;
    if (!K(this.node))
      throw new Error("node must be HTML Element");
    if (!["animation", "transition"].includes(this.options.animationKind))
      throw new Error("animationKind must be either animation or transition");
    if (typeof this.options.animationClassPrefix != "string" || !((t = this.options.animationClassPrefix) != null && t.length))
      throw new Error("animationClassPrefix must be a valid string");
    if (typeof this.options.onEnter != "function")
      throw new Error("onEnter must be function");
    if (typeof this.options.onEntered != "function")
      throw new Error("onEntered must be function");
    if (typeof this.options.onExit != "function")
      throw new Error("onExit must be function");
    if (typeof this.options.onExited != "function")
      throw new Error("onExit must be function");
    if (!Number.isFinite(this.options.animationTimeout) || this.options.animationTimeout < 1)
      throw new Error("animationTimeout must be number and larger than 0");
  }
  cleanupAnimationEventListners(t) {
    let e;
    t === "enter" ? e = o(this, x) : t === "exit" && (e = o(this, y)), e && this.node && this.node.removeEventListener(`${this.options.animationKind}end`, e);
  }
  handleAnimationTimeout(t) {
    const e = Date.now(), i = setInterval(() => {
      if (!this.node) {
        clearInterval(i);
        return;
      }
      if (Date.now() - e > this.options.animationTimeout)
        if (this.node.classList.contains(`${this.options.animationClassPrefix}-${t}`)) {
          clearInterval(i);
          return;
        } else {
          t === "entered" ? o(this, x).call(this) : o(this, y).call(this), clearInterval(i);
          return;
        }
    }, 100);
  }
  startEnteringAnimation() {
    this.node.classList.add(`${this.options.animationClassPrefix}-enter`), typeof this.options.onEnter == "function" && this.options.onEnter(), this.handleAnimationTimeout("entered"), this.node.addEventListener(`${this.options.animationKind}end`, o(this, x));
  }
  startExitingAnimation() {
    this.node.classList.remove(`${this.options.animationClassPrefix}-entered`), typeof this.options.onExit == "function" && this.options.onExit(), this.node.classList.add(`${this.options.animationClassPrefix}-exit`), this.handleAnimationTimeout("exited"), this.node.addEventListener(`${this.options.animationKind}end`, o(this, y));
  }
  mount(t = "append", e) {
    if (!K(e))
      throw new Error("parent must be HTML Element");
    if (t !== "append" && t !== "prepend")
      throw new Error("direction must be either append or prepend");
    t === "append" ? e.appendChild(this.node) : t === "prepend" && e.prepend(this.node), this.node.classList.add(this.options.animationClassPrefix), setTimeout(this.startEnteringAnimation.bind(this), 100);
  }
  appendChild(t) {
    this.mount("append", t);
  }
  prepend(t) {
    this.mount("prepend", t);
  }
  append(t) {
    this.mount("append", t);
  }
  remove() {
    this.startExitingAnimation();
  }
}
x = new WeakMap(), y = new WeakMap();
const q = a("container"), pt = (s = "slide") => ({
  slide: a("slide"),
  fade: a("fade"),
  zoom: a("zoom"),
  bounce: a("bounce")
})[s] ?? s, gt = (s) => {
  const t = [
    a("slide"),
    a("fade"),
    a("zoom"),
    a("bounce")
  ];
  return Array.from(s.classList).filter((i) => t.some((n) => {
    if (i.startsWith(n))
      return i;
  }));
};
class Ct {
  constructor(t, e, i) {
    c(this, "options");
    c(this, "content");
    c(this, "delegator");
    c(this, "mountedIn");
    c(this, "appearedAt");
    c(this, "element");
    c(this, "domManager");
    this.options = e, this.content = t, this.delegator = i, this.element = F({
      ...e,
      content: t
    });
  }
  close() {
    this.delegator.close(this);
  }
  closeAll() {
    this.delegator.closeAll();
  }
  update(t, e) {
    const i = {
      ...this.options,
      ...e,
      content: t
    };
    try {
      const n = F(i), l = gt(this.element);
      n.classList.add(...l), this.element.innerHTML = n.innerHTML, this.element.setAttribute("class", n.getAttribute("class")), this.delegator.update(this, t, e);
    } catch {
    }
  }
}
var h, W, B, H, Y, G;
class bt {
  constructor() {
    b(this, h);
    c(this, "options", {});
    c(this, "toasts", []);
  }
  notify(t, e = w) {
    var l, f, m;
    this.options = {
      ...w,
      ...e ?? {},
      offset: {
        ...w.offset,
        ...(e ?? {}).offset
      }
    }, p(this, h, Y).call(this, {
      "--toast-position-offset-x": CSS.px(((l = this.options.offset) == null ? void 0 : l.x) ?? 30),
      "--toast-position-offset-y": CSS.px(((f = this.options.offset) == null ? void 0 : f.y) ?? 30)
    });
    const i = p(this, h, G).call(this, (m = this.options) == null ? void 0 : m.position), n = new Ct(t, this.options, this);
    return n.domManager = p(this, h, W).call(this, i, n.element), n.mountedIn = i, n.appearedAt = Date.now(), this.toasts.push(n), n;
  }
  close(t) {
    var e, i;
    this.toasts = this.toasts.filter((n) => n !== t), (i = (e = t.domManager) == null ? void 0 : e.remove) == null || i.call(e);
  }
  update(t, e, i) {
    const n = this.toasts.find((l) => l.element === t.element);
    n && (p(this, h, B).call(this, n.domManager, t.element), p(this, h, H).call(this, t.element));
  }
  closeAll() {
    this.toasts.forEach((t) => {
      this.close(t);
    });
  }
  success(t, e) {
    return this.notify(t, { ...e, type: "success" });
  }
  info(t, e) {
    return this.notify(t, { ...e, type: "info" });
  }
  warn(t, e) {
    return this.notify(t, { ...e, type: "warning" });
  }
  error(t, e) {
    return this.notify(t, { ...e, type: "error" });
  }
}
h = new WeakSet(), W = function(t, e) {
  var l, f, m;
  const i = (l = this.options) != null && l.animation ? pt((f = this.options) == null ? void 0 : f.animation) : "rb-toast-slide", n = new ut(e, {
    animationClassPrefix: i,
    animationKind: ["rb-toast-slide"].includes(i) ? "transition" : "animation",
    onEnter: () => {
    },
    onExit: () => {
    },
    onEntered: () => {
      if (p(this, h, H).call(this, e), typeof this.options.onShow == "function" && this.options.onShow(), this.options.duration && this.options.autoClose) {
        let u = this.options.duration;
        this.options.duration < 1e3 && (console.warn("Duration should be greater than 1000ms"), u = 3e3), setTimeout(() => {
          var C;
          try {
            (C = n == null ? void 0 : n.remove) == null || C.call(n), this.toasts = this.toasts.filter((g) => g.element !== e);
          } catch (g) {
            console.error("Failed to auto close toast", g);
          }
        }, u);
      }
    },
    onExited: () => {
      var u;
      (this.toasts.length === 0 || ((u = t == null ? void 0 : t.children) == null ? void 0 : u.length) === 0) && t.remove(), typeof this.options.onClose == "function" && this.options.onClose();
    },
    animationTimeout: 300
  });
  return p(this, h, B).call(this, n, e), ["bottom-right", "bottom-left", "center"].includes((m = this.options) == null ? void 0 : m.position) ? n.append(t) : n.prepend(t), n;
}, B = function(t, e) {
  var n;
  const i = e.querySelector(`.${a("close-btn")}`);
  i && ((n = this.options) != null && n.isCloseable ? i.addEventListener("click", () => {
    var l;
    (l = t == null ? void 0 : t.remove) == null || l.call(t), typeof this.options.onClose == "function" && this.options.onClose();
  }) : i.remove());
}, H = function(t) {
  var i, n;
  const e = t.querySelector(
    `.${a("alert-progress-bar-fill")}`
  );
  if (e && (i = this.options) != null && i.hasProgressBar) {
    let l = ((n = this.options) == null ? void 0 : n.progress) ?? 0;
    l > 100 ? l = 100 : l < 0 && (l = 0), e.animate(
      // @ts-ignore
      [{ width: CSS.percent(l) }, { width: "100%" }],
      { duration: this.options.duration, fill: "forwards" }
    );
  }
}, Y = function(t) {
  var i;
  const e = document.documentElement;
  if (t && ((i = Object.keys(t)) == null ? void 0 : i.length) > 0)
    for (const [n, l] of Object.entries(t))
      e.style.setProperty(n, l.toString());
}, G = function(t, e = document.body) {
  let i = e.querySelector(
    `.${q}.${a(t)}`
  );
  return i || (i = document.createElement("div"), i.classList.add(q, a(t)), e.appendChild(i)), i;
};
const xt = new bt();
export {
  xt as default
};
