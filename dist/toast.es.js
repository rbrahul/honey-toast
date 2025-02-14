var G = Object.defineProperty;
var D = (e) => {
  throw TypeError(e);
};
var Y = (e, t, s) => t in e ? G(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var c = (e, t, s) => Y(e, typeof t != "symbol" ? t + "" : t, s), T = (e, t, s) => t.has(e) || D("Cannot " + s);
var n = (e, t, s) => (T(e, t, "read from private field"), s ? s.call(e) : t.get(e)), C = (e, t, s) => t.has(e) ? D("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), A = (e, t, s, i) => (T(e, t, "write to private field"), i ? i.call(e, s) : t.set(e, s), s), b = (e, t, s) => (T(e, t, "access private method"), s);
const J = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.0016%202.00098C12.4158%202.00098%2012.7516%202.33676%2012.7516%202.75098V3.53801C16.5416%203.9143%2019.5016%207.11197%2019.5016%2011.001V14.115L20.1938%2015.9609C20.7454%2017.4319%2019.6581%2019.001%2018.0871%2019.001H15.0628C15.0287%2020.6631%2013.6701%2021.9995%2011.9998%2021.9995C10.3295%2021.9995%208.97089%2020.6631%208.93682%2019.001H5.9161C4.34514%2019.001%203.25776%2017.4319%203.80936%2015.9609L4.5016%2014.115V11.001C4.5016%207.11197%207.46161%203.9143%2011.2516%203.53801V2.75098C11.2516%202.33676%2011.5874%202.00098%2012.0016%202.00098ZM10.4375%2019.001C10.471%2019.8339%2011.1573%2020.4995%2011.9998%2020.4995C12.8423%2020.4995%2013.5286%2019.8339%2013.5622%2019.001H10.4375ZM6.0016%2011.001C6.0016%207.68727%208.68789%205.00098%2012.0016%205.00098C15.3153%205.00098%2018.0016%207.68727%2018.0016%2011.001V14.1168C18.0016%2014.2955%2018.0337%2014.4727%2018.0965%2014.64L18.7893%2016.4876C18.9732%2016.9779%2018.6108%2017.501%2018.0871%2017.501H5.9161C5.39244%2017.501%205.02998%2016.9779%205.21385%2016.4876L5.90673%2014.64C5.96946%2014.4727%206.0016%2014.2955%206.0016%2014.1168V11.001Z'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e", Q = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20d='M6.21967%207.28033C5.92678%206.98744%205.92678%206.51256%206.21967%206.21967C6.51256%205.92678%206.98744%205.92678%207.28033%206.21967L11.999%2010.9384L16.7176%206.2198C17.0105%205.92691%2017.4854%205.92691%2017.7782%206.2198C18.0711%206.51269%2018.0711%206.98757%2017.7782%207.28046L13.0597%2011.999L17.7782%2016.7176C18.0711%2017.0105%2018.0711%2017.4854%2017.7782%2017.7782C17.4854%2018.0711%2017.0105%2018.0711%2016.7176%2017.7782L11.999%2013.0597L7.28033%2017.7784C6.98744%2018.0713%206.51256%2018.0713%206.21967%2017.7784C5.92678%2017.4855%205.92678%2017.0106%206.21967%2016.7177L10.9384%2011.999L6.21967%207.28033Z'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e", F = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20d='M19.2803%206.76264C19.5732%207.05553%2019.5732%207.53041%2019.2803%207.8233L9.86348%2017.2402C9.57058%2017.533%209.09571%2017.533%208.80282%2017.2402L4.71967%2013.157C4.42678%2012.8641%204.42678%2012.3892%204.71967%2012.0963C5.01256%2011.8035%205.48744%2011.8035%205.78033%2012.0963L9.33315%2015.6492L18.2197%206.76264C18.5126%206.46975%2018.9874%206.46975%2019.2803%206.76264Z'%20fill='%23ffffff'/%3e%3c/svg%3e", R = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20d='M16.6272%204.49741C17.0414%204.49741%2017.3772%204.8332%2017.3772%205.24741V6.9957C17.3772%207.40992%2017.0414%207.7457%2016.6272%207.7457C16.213%207.7457%2015.8772%207.40992%2015.8772%206.9957V5.24741C15.8772%204.8332%2016.213%204.49741%2016.6272%204.49741Z'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20d='M15.8262%209.49781C15.8262%209.05598%2016.1844%208.69781%2016.6262%208.69781C17.068%208.69781%2017.4272%209.05598%2017.4272%209.49781C17.4272%209.93964%2017.069%2010.2978%2016.6272%2010.2978C16.1854%2010.2978%2015.8262%209.93964%2015.8262%209.49781Z'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.2517%207.375C11.2517%204.40647%2013.6582%202%2016.6267%202C19.5952%202%2022.0017%204.40647%2022.0017%207.375C22.0017%2010.3435%2019.5952%2012.75%2016.6267%2012.75C13.6582%2012.75%2011.2517%2010.3435%2011.2517%207.375ZM16.6267%203.5C14.4866%203.5%2012.7517%205.2349%2012.7517%207.375C12.7517%209.5151%2014.4866%2011.25%2016.6267%2011.25C18.7668%2011.25%2020.5017%209.5151%2020.5017%207.375C20.5017%205.2349%2018.7668%203.5%2016.6267%203.5Z'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10.8913%203.58234C7.27568%204.11887%204.5016%207.23584%204.5016%2011.0007V14.1147L3.80936%2015.9607C3.25776%2017.4316%204.34514%2019.0007%205.9161%2019.0007H8.93682C8.97089%2020.6629%2010.3295%2021.9993%2011.9998%2021.9993C13.6701%2021.9993%2015.0287%2020.6629%2015.0628%2019.0007H18.0871C19.6581%2019.0007%2020.7454%2017.4316%2020.1938%2015.9607L19.5016%2014.1147V13.6218C19.0282%2013.84%2018.5257%2014.006%2018.0016%2014.1124V14.1166C18.0016%2014.2952%2018.0337%2014.4724%2018.0965%2014.6397L18.7893%2016.4874C18.9732%2016.9777%2018.6108%2017.5007%2018.0871%2017.5007H5.9161C5.39244%2017.5007%205.02998%2016.9777%205.21385%2016.4874L5.90673%2014.6397C5.96946%2014.4724%206.0016%2014.2952%206.0016%2014.1166V11.0007C6.0016%208.36516%207.70092%206.12648%2010.0637%205.32059C10.2582%204.69854%2010.5387%204.11448%2010.8913%203.58234ZM11.9998%2020.4993C11.1573%2020.4993%2010.471%2019.8337%2010.4375%2019.0007H13.5622C13.5286%2019.8337%2012.8423%2020.4993%2011.9998%2020.4993Z'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e", X = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20d='M12.0006%204.5C11.2951%204.5%2010.7329%205.09006%2010.7671%205.79476L11.2515%2015.7858C11.2709%2016.1855%2011.6005%2016.4995%2012.0006%2016.4995C12.4007%2016.4995%2012.7304%2016.1855%2012.7497%2015.7858L13.2341%205.79476C13.2683%205.09006%2012.7061%204.5%2012.0006%204.5Z'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20d='M11.9994%2017.85C11.5023%2017.85%2011.0994%2018.2529%2011.0994%2018.75C11.0994%2019.2471%2011.5023%2019.65%2011.9994%2019.65H12.0004C12.4974%2019.65%2012.9004%2019.2471%2012.9004%2018.75C12.9004%2018.2529%2012.4974%2017.85%2012.0004%2017.85H11.9994Z'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e", tt = [
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
], et = [
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
], st = (e, t) => {
  const s = {};
  return t.forEach((i) => {
    i in e && (s[i] = e[i]);
  }), s;
}, S = (e, t) => {
  for (const [s, i] of Object.entries(t))
    e.setAttribute(s, i);
}, it = (e) => typeof e == "object" && e !== null, nt = (e, t) => {
  if (it(t))
    for (const [s, i] of Object.entries(t))
      e.addEventListener(s, i);
}, ot = () => new DocumentFragment(), P = (e, t) => {
  if (t = t ?? ot(), Array.isArray(e))
    return e.forEach((i) => P(i, t)), t;
  if (!e || !(e != null && e.tag))
    return t;
  if (e.domElement)
    return t.appendChild(e.domElement), t;
  const s = e.tag.toLocaleLowerCase();
  if (tt.includes(s)) {
    const i = document.createElement(s);
    if (i) {
      e.attrs && typeof e.attrs == "object" && S(i, e.attrs);
      const o = st(e, et);
      S(i, o), e.classes && Array.isArray(e.classes) && i.classList.add(...e.classes), nt(i, e == null ? void 0 : e.events), e.children ? P(e.children, i) : e.html !== void 0 ? i.innerHTML = e.html : e.text !== void 0 && (i.textContent = e.text), t.appendChild(i);
    }
  }
  return t;
}, at = (e) => {
  var t, s;
  return (s = (t = P(e)) == null ? void 0 : t.childNodes) == null ? void 0 : s[0];
}, rt = {
  default: J,
  success: F,
  info: X,
  warining: R,
  error: Q
}, lt = "rb-toast", a = (e) => `${lt}-${e}`, L = {
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
}, M = (e) => typeof e == "object" && "tagName" in e && e instanceof HTMLElement;
var d, r, v, U, _;
class dt {
  constructor(t) {
    C(this, v);
    C(this, d);
    C(this, r);
    return A(this, r, {
      ...L,
      ...t,
      icon: {
        ...L.icon,
        ...(t == null ? void 0 : t.icon) ?? {}
      }
    }), typeof t.content == "object" && !M(t.content) && (n(this, r).content = {
      ...L.content,
      ...t.content
    }), A(this, d, b(this, v, U).call(this)), this;
  }
  addClasses() {
    var l, m, u, p, g, h;
    const t = a("alert"), s = (l = n(this, r)) != null && l.type ? a((m = n(this, r)) == null ? void 0 : m.type) : a("default"), i = (u = n(this, r)) != null && u.design ? a((p = n(this, r)) == null ? void 0 : p.design) : a("standard"), o = (g = n(this, r)) != null && g.theme ? a((h = n(this, r)) == null ? void 0 : h.theme) : a("light");
    return n(this, d).classes = [
      t,
      s,
      i,
      o
    ], n(this, r).classNames && (n(this, d).classes = [
      .../* @__PURE__ */ new Set([
        ...n(this, d).classes,
        ...n(this, r).classNames
      ])
    ]), this;
  }
  createTitle() {
    var i, o;
    const t = (o = (i = n(this, r)) == null ? void 0 : i.content) == null ? void 0 : o.title;
    if (!t)
      return;
    const s = {
      tag: "div",
      classes: [a("title")],
      children: []
    };
    return t && typeof t == "object" ? (t.iconUrl && s.children.push({
      tag: "img",
      attrs: {
        src: t == null ? void 0 : t.iconUrl
      },
      classes: [a("title-icon")]
    }), t.text && s.children.push({
      tag: "span",
      text: t.text,
      classes: [a("title-text")]
    })) : typeof t == "string" && s.children.push({
      tag: "span",
      html: t,
      classes: [a("title-text")]
    }), s;
  }
  addBody() {
    var o, l, m, u, p, g, h, $, B, I, j, V, Z, O, k;
    const t = {
      tag: "div",
      classes: [a("content-wrapper")],
      children: []
    }, s = {
      tag: "div",
      classes: [a("body")],
      children: []
    };
    if (M(n(this, r).content))
      return s.children.push({
        tag: "div",
        domElement: n(this, r).content,
        classes: []
      }), n(this, d).children.push(s), this;
    if (n(this, r).hasIcon) {
      const E = {
        tag: "img",
        attrs: {
          src: (l = (o = n(this, r)) == null ? void 0 : o.icon) != null && l.url ? (u = (m = n(this, r)) == null ? void 0 : m.icon) == null ? void 0 : u.url : rt[(p = n(this, r)) == null ? void 0 : p.type] ?? F
        },
        classes: [a("alert-icon")]
      };
      (h = (g = n(this, r)) == null ? void 0 : g.icon) != null && h.size ? E.classes.push(a(`alert-icon-${(B = ($ = n(this, r)) == null ? void 0 : $.icon) == null ? void 0 : B.size}`)) : E.classes.push(a("alert-icon-small")), (j = (I = n(this, r)) == null ? void 0 : I.icon) != null && j.classes && E.classes.push(...(Z = (V = n(this, r)) == null ? void 0 : V.icon) == null ? void 0 : Z.classes), t.children.push(E);
    }
    typeof n(this, r).content == "object" && ((O = n(this, r).content) != null && O.message) ? s.children.push({
      tag: "div",
      html: (k = n(this, r).content) == null ? void 0 : k.message,
      classes: [a("message")]
    }) : typeof n(this, r).content == "string" && s.children.push({
      tag: "span",
      html: n(this, r).content,
      classes: [a("message")]
    });
    const i = this.createTitle();
    return i && s.children && s.children.unshift(i), t.children.push(s), n(this, d).children.push(t), this;
  }
  addActionButtons() {
    const t = n(this, r).content;
    if (typeof t != "object" || !Array.isArray(t == null ? void 0 : t.buttons))
      return this;
    if ((t == null ? void 0 : t.buttons.length) > 0) {
      const s = {
        tag: "div",
        classes: [a("alert-btn-group")],
        children: []
      };
      s.children = t == null ? void 0 : t.buttons.map(b(this, v, _)), n(this, d).children.push(s);
    }
    return this;
  }
  addCloseBtn() {
    if (n(this, r).isCloseable) {
      const t = {
        tag: "span",
        html: "&#10005;",
        classes: [a("close-btn")]
      };
      n(this, d).children.push(t);
    }
    return this;
  }
  addProgressBar() {
    return n(this, d).children.push({
      tag: "div",
      text: "",
      classes: [a("alert-progress-bar")]
    }), this;
  }
  toHtml() {
    return at(n(this, d));
  }
}
d = new WeakMap(), r = new WeakMap(), v = new WeakSet(), U = function() {
  return {
    tag: "div",
    classes: [],
    children: []
  };
}, _ = function(t) {
  const s = {
    tag: "button",
    children: [],
    classes: [],
    events: {
      click: t.onClick ?? (() => {
      })
    }
  };
  if (s.classes = [a("btn"), a(`btn-${(t == null ? void 0 : t.type) ?? "default"}`), ...t.classes ?? []], t.iconUrl) {
    const i = {
      tag: "img",
      attrs: {
        src: t.iconUrl
      },
      classes: [a("btn-icon-small")]
    };
    s.children.push(i);
  }
  if (t.label !== void 0) {
    const i = {
      tag: "span",
      html: t.label,
      classes: [a("btn-label")]
    };
    s.children.push(i);
  }
  return s;
};
const ct = (e) => e && (typeof e == "string" || e.title !== void 0 || (e == null ? void 0 : e.message) !== void 0 || M(e)), N = (e) => {
  if (console.log("ToastBuilderProps OPTIONS:", e), !ct(e == null ? void 0 : e.content))
    throw new Error(
      "Only string, HTMLElement or an object having keys title, message, buttons is supported as content"
    );
  return new dt(e).addClasses().addBody().addActionButtons().addCloseBtn().addProgressBar().toHtml();
}, y = () => {
}, ht = {
  animationClassPrefix: "",
  animationKind: "animation",
  // event is dispatched once *-enter class is added and dom is staring to appear
  onEnter: y,
  // event is dispatched once *-enter class already added and animationKindend event was triggered
  onEntered: y,
  // event is dispatched once *-exits class is added and dom is staring to disappear
  onExit: y,
  // event is dispatched once *-exit class already added and animationKindend event was triggered
  onExited: y,
  // if there is no transtionend or animationend event is triggered after this timeout, it will go to the next phase -entered or -exited
  animationTimeout: 500
}, K = (e) => typeof e == "object" && ((e || {}).tagName || (e == null ? void 0 : e.nodeName));
var w, x;
class ft {
  constructor(t, s) {
    c(this, "options");
    c(this, "node");
    C(this, w, () => {
      var t, s;
      (s = (t = this.node) == null ? void 0 : t.classList) != null && s.contains(`${this.options.animationClassPrefix}-enter`) && (this.node.classList.remove(`${this.options.animationClassPrefix}-enter`), this.node.classList.add(`${this.options.animationClassPrefix}-entered`), this.cleanupAnimationEventListners("enter"), typeof this.options.onEntered == "function" && this.options.onEntered());
    });
    C(this, x, () => {
      var t, s, i;
      (s = (t = this.node) == null ? void 0 : t.classList) != null && s.contains(`${this.options.animationClassPrefix}-exit`) && (this.node.classList.remove(`${this.options.animationClassPrefix}-exit`), this.node.classList.add(`${this.options.animationClassPrefix}-exited`), this.cleanupAnimationEventListners("exit"), (i = this.node) == null || i.remove(), typeof this.options.onExited == "function" && this.options.onExited());
    });
    this.options = {
      ...ht,
      ...s || {}
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
    let s;
    t === "enter" ? s = n(this, w) : t === "exit" && (s = n(this, x)), s && this.node && this.node.removeEventListener(`${this.options.animationKind}end`, s);
  }
  handleAnimationTimeout(t) {
    const s = Date.now(), i = setInterval(() => {
      if (!this.node) {
        clearInterval(i);
        return;
      }
      if (Date.now() - s > this.options.animationTimeout)
        if (this.node.classList.contains(`${this.options.animationClassPrefix}-${t}`)) {
          clearInterval(i);
          return;
        } else {
          t === "entered" ? n(this, w).call(this) : n(this, x).call(this), clearInterval(i);
          return;
        }
      console.log("Looking for animation to finish for :", t);
    }, 100);
  }
  startEnteringAnimation() {
    this.node.classList.add(`${this.options.animationClassPrefix}-enter`), typeof this.options.onEnter == "function" && this.options.onEnter(), this.handleAnimationTimeout("entered"), console.log(`${this.options.animationKind}end`), this.node.addEventListener(`${this.options.animationKind}end`, n(this, w));
  }
  startExitingAnimation() {
    this.node.classList.remove(`${this.options.animationClassPrefix}-entered`), typeof this.options.onExit == "function" && this.options.onExit(), this.node.classList.add(`${this.options.animationClassPrefix}-exit`), this.handleAnimationTimeout("exited"), this.node.addEventListener(`${this.options.animationKind}end`, n(this, x));
  }
  mount(t = "append", s) {
    if (!K(s))
      throw new Error("parent must be HTML Element");
    if (t !== "append" && t !== "prepend")
      throw new Error("direction must be either append or prepend");
    t === "append" ? s.appendChild(this.node) : t === "prepend" && s.prepend(this.node), this.node.classList.add(this.options.animationClassPrefix), setTimeout(this.startEnteringAnimation.bind(this), 100);
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
w = new WeakMap(), x = new WeakMap();
const z = a("container"), mt = (e = "slide") => ({
  slide: a("slide"),
  fade: a("fade"),
  zoom: a("zoom"),
  bounce: a("bounce")
})[e] ?? e, ut = (e) => {
  const t = [
    a("slide"),
    a("fade"),
    a("zoom"),
    a("bounce")
  ];
  return Array.from(e.classList).filter((i) => t.some((o) => {
    if (i.startsWith(o))
      return i;
  }));
};
class pt {
  constructor(t, s, i) {
    c(this, "options");
    c(this, "content");
    c(this, "delegator");
    c(this, "mountedIn");
    c(this, "appearedAt");
    c(this, "element");
    c(this, "domManager");
    this.options = s, this.content = t, this.delegator = i, this.element = N({
      ...s,
      content: t
    });
  }
  close() {
    this.delegator.close(this);
  }
  closeAll() {
    this.delegator.closeAll();
  }
  update(t, s) {
    const i = N({
      ...this.options,
      ...s,
      content: t
    }), o = ut(this.element);
    i.classList.add(...o), this.element.innerHTML = i.innerHTML, this.delegator.update(this, t, s);
  }
}
var f, q, H, W;
class gt {
  constructor() {
    C(this, f);
    c(this, "options", {});
    c(this, "toasts", []);
  }
  notify(t, s) {
    var l;
    this.options = {
      ...L,
      ...s ?? {}
    };
    const i = b(this, f, W).call(this, (l = this.options) == null ? void 0 : l.position), o = new pt(t, this.options, this);
    return o.domManager = b(this, f, q).call(this, i, o.element), o.mountedIn = i, o.appearedAt = Date.now(), this.toasts.push(o), o;
  }
  close(t) {
    var s, i;
    this.toasts = this.toasts.filter((o) => o !== t), (i = (s = t.domManager) == null ? void 0 : s.remove) == null || i.call(s);
  }
  update(t, s, i) {
    const o = this.toasts.find((l) => l.element === t.element);
    if (!o) {
      console.error("Failed to update toast");
      return;
    }
    console.log("UPDATING Current Toast:", o), b(this, f, H).call(this, o.domManager, t.element);
  }
  closeAll() {
    this.toasts.forEach((t) => {
      this.close(t);
    });
  }
}
f = new WeakSet(), q = function(t, s) {
  var l, m, u;
  const i = (l = this.options) != null && l.animation ? mt((m = this.options) == null ? void 0 : m.animation) : "rb-toast-slide", o = new ft(s, {
    animationClassPrefix: i,
    animationKind: ["rb-toast-slide"].includes(i) ? "transition" : "animation",
    onEnter: () => {
    },
    onExit: () => {
    },
    onEntered: () => {
      if (typeof this.options.onShow == "function" && this.options.onShow(), this.options.duration && this.options.autoClose) {
        let p = this.options.duration;
        this.options.duration < 1e3 && (console.warn("Duration should be greater than 1000ms"), p = 3e3), setTimeout(() => {
          var g;
          try {
            (g = o == null ? void 0 : o.remove) == null || g.call(o), this.toasts = this.toasts.filter((h) => h.element !== s);
          } catch (h) {
            console.error("Failed to auto close toast", h);
          }
        }, p);
      }
    },
    onExited: () => {
      typeof this.options.onClose == "function" && this.options.onClose();
    },
    animationTimeout: 300
  });
  return b(this, f, H).call(this, o, s), ["bottom-right", "bottom-left", "center"].includes((u = this.options) == null ? void 0 : u.position) ? o.append(t) : o.prepend(t), o;
}, H = function(t, s) {
  var o;
  const i = s.querySelector(`.${a("close-btn")}`);
  i && ((o = this.options) != null && o.isCloseable ? i.addEventListener("click", () => {
    var l;
    (l = t == null ? void 0 : t.remove) == null || l.call(t), typeof this.options.onClose == "function" && this.options.onClose();
  }) : i.remove());
}, W = function(t, s = document.body) {
  let i = s.querySelector(
    `.${z}.${a(t)}`
  );
  return i || (i = document.createElement("div"), i.classList.add(z, a(t)), s.appendChild(i)), i;
};
const bt = new gt();
export {
  bt as default
};
