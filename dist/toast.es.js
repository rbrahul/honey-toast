var tt = Object.defineProperty;
var F = (s) => {
  throw TypeError(s);
};
var et = (s, e, t) => e in s ? tt(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var d = (s, e, t) => et(s, typeof e != "symbol" ? e + "" : e, t), $ = (s, e, t) => e.has(s) || F("Cannot " + t);
var o = (s, e, t) => ($(s, e, "read from private field"), t ? t.call(s) : e.get(s)), b = (s, e, t) => e.has(s) ? F("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t), B = (s, e, t, i) => ($(s, e, "write to private field"), i ? i.call(s, t) : e.set(s, t), t), p = (s, e, t) => ($(s, e, "access private method"), t);
const st = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.0016%202.00098C12.4158%202.00098%2012.7516%202.33676%2012.7516%202.75098V3.53801C16.5416%203.9143%2019.5016%207.11197%2019.5016%2011.001V14.115L20.1938%2015.9609C20.7454%2017.4319%2019.6581%2019.001%2018.0871%2019.001H15.0628C15.0287%2020.6631%2013.6701%2021.9995%2011.9998%2021.9995C10.3295%2021.9995%208.97089%2020.6631%208.93682%2019.001H5.9161C4.34514%2019.001%203.25776%2017.4319%203.80936%2015.9609L4.5016%2014.115V11.001C4.5016%207.11197%207.46161%203.9143%2011.2516%203.53801V2.75098C11.2516%202.33676%2011.5874%202.00098%2012.0016%202.00098ZM10.4375%2019.001C10.471%2019.8339%2011.1573%2020.4995%2011.9998%2020.4995C12.8423%2020.4995%2013.5286%2019.8339%2013.5622%2019.001H10.4375ZM6.0016%2011.001C6.0016%207.68727%208.68789%205.00098%2012.0016%205.00098C15.3153%205.00098%2018.0016%207.68727%2018.0016%2011.001V14.1168C18.0016%2014.2955%2018.0337%2014.4727%2018.0965%2014.64L18.7893%2016.4876C18.9732%2016.9779%2018.6108%2017.501%2018.0871%2017.501H5.9161C5.39244%2017.501%205.02998%2016.9779%205.21385%2016.4876L5.90673%2014.64C5.96946%2014.4727%206.0016%2014.2955%206.0016%2014.1168V11.001Z'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e", it = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20d='M6.21967%207.28033C5.92678%206.98744%205.92678%206.51256%206.21967%206.21967C6.51256%205.92678%206.98744%205.92678%207.28033%206.21967L11.999%2010.9384L16.7176%206.2198C17.0105%205.92691%2017.4854%205.92691%2017.7782%206.2198C18.0711%206.51269%2018.0711%206.98757%2017.7782%207.28046L13.0597%2011.999L17.7782%2016.7176C18.0711%2017.0105%2018.0711%2017.4854%2017.7782%2017.7782C17.4854%2018.0711%2017.0105%2018.0711%2016.7176%2017.7782L11.999%2013.0597L7.28033%2017.7784C6.98744%2018.0713%206.51256%2018.0713%206.21967%2017.7784C5.92678%2017.4855%205.92678%2017.0106%206.21967%2016.7177L10.9384%2011.999L6.21967%207.28033Z'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e", N = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20d='M19.2803%206.76264C19.5732%207.05553%2019.5732%207.53041%2019.2803%207.8233L9.86348%2017.2402C9.57058%2017.533%209.09571%2017.533%208.80282%2017.2402L4.71967%2013.157C4.42678%2012.8641%204.42678%2012.3892%204.71967%2012.0963C5.01256%2011.8035%205.48744%2011.8035%205.78033%2012.0963L9.33315%2015.6492L18.2197%206.76264C18.5126%206.46975%2018.9874%206.46975%2019.2803%206.76264Z'%20fill='%23ffffff'/%3e%3c/svg%3e", nt = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20d='M16.6272%204.49741C17.0414%204.49741%2017.3772%204.8332%2017.3772%205.24741V6.9957C17.3772%207.40992%2017.0414%207.7457%2016.6272%207.7457C16.213%207.7457%2015.8772%207.40992%2015.8772%206.9957V5.24741C15.8772%204.8332%2016.213%204.49741%2016.6272%204.49741Z'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20d='M15.8262%209.49781C15.8262%209.05598%2016.1844%208.69781%2016.6262%208.69781C17.068%208.69781%2017.4272%209.05598%2017.4272%209.49781C17.4272%209.93964%2017.069%2010.2978%2016.6272%2010.2978C16.1854%2010.2978%2015.8262%209.93964%2015.8262%209.49781Z'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.2517%207.375C11.2517%204.40647%2013.6582%202%2016.6267%202C19.5952%202%2022.0017%204.40647%2022.0017%207.375C22.0017%2010.3435%2019.5952%2012.75%2016.6267%2012.75C13.6582%2012.75%2011.2517%2010.3435%2011.2517%207.375ZM16.6267%203.5C14.4866%203.5%2012.7517%205.2349%2012.7517%207.375C12.7517%209.5151%2014.4866%2011.25%2016.6267%2011.25C18.7668%2011.25%2020.5017%209.5151%2020.5017%207.375C20.5017%205.2349%2018.7668%203.5%2016.6267%203.5Z'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10.8913%203.58234C7.27568%204.11887%204.5016%207.23584%204.5016%2011.0007V14.1147L3.80936%2015.9607C3.25776%2017.4316%204.34514%2019.0007%205.9161%2019.0007H8.93682C8.97089%2020.6629%2010.3295%2021.9993%2011.9998%2021.9993C13.6701%2021.9993%2015.0287%2020.6629%2015.0628%2019.0007H18.0871C19.6581%2019.0007%2020.7454%2017.4316%2020.1938%2015.9607L19.5016%2014.1147V13.6218C19.0282%2013.84%2018.5257%2014.006%2018.0016%2014.1124V14.1166C18.0016%2014.2952%2018.0337%2014.4724%2018.0965%2014.6397L18.7893%2016.4874C18.9732%2016.9777%2018.6108%2017.5007%2018.0871%2017.5007H5.9161C5.39244%2017.5007%205.02998%2016.9777%205.21385%2016.4874L5.90673%2014.6397C5.96946%2014.4724%206.0016%2014.2952%206.0016%2014.1166V11.0007C6.0016%208.36516%207.70092%206.12648%2010.0637%205.32059C10.2582%204.69854%2010.5387%204.11448%2010.8913%203.58234ZM11.9998%2020.4993C11.1573%2020.4993%2010.471%2019.8337%2010.4375%2019.0007H13.5622C13.5286%2019.8337%2012.8423%2020.4993%2011.9998%2020.4993Z'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e", ot = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20d='M12.0006%204.5C11.2951%204.5%2010.7329%205.09006%2010.7671%205.79476L11.2515%2015.7858C11.2709%2016.1855%2011.6005%2016.4995%2012.0006%2016.4995C12.4007%2016.4995%2012.7304%2016.1855%2012.7497%2015.7858L13.2341%205.79476C13.2683%205.09006%2012.7061%204.5%2012.0006%204.5Z'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20d='M11.9994%2017.85C11.5023%2017.85%2011.0994%2018.2529%2011.0994%2018.75C11.0994%2019.2471%2011.5023%2019.65%2011.9994%2019.65H12.0004C12.4974%2019.65%2012.9004%2019.2471%2012.9004%2018.75C12.9004%2018.2529%2012.4974%2017.85%2012.0004%2017.85H11.9994Z'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e", rt = [
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
], at = [
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
], lt = (s, e) => {
  const t = {};
  return e.forEach((i) => {
    i in s && (t[i] = s[i]);
  }), t;
}, q = (s, e) => {
  for (const [t, i] of Object.entries(e))
    s.setAttribute(t, i);
}, ht = (s) => typeof s == "object" && s !== null, ft = (s, e) => {
  if (ht(e))
    for (const [t, i] of Object.entries(e))
      s.addEventListener(t, i);
}, dt = () => new DocumentFragment(), M = (s, e) => {
  if (e = e ?? dt(), Array.isArray(s))
    return s.forEach((i) => M(i, e)), e;
  if (!s || !(s != null && s.tag))
    return e;
  if (s.domElement)
    return e.appendChild(s.domElement), e;
  const t = s.tag.toLocaleLowerCase();
  if (rt.includes(t)) {
    const i = document.createElement(t);
    if (i) {
      s.attrs && typeof s.attrs == "object" && q(i, s.attrs);
      const n = lt(s, at);
      q(i, n), s.classes && Array.isArray(s.classes) && i.classList.add(...s.classes), ft(i, s == null ? void 0 : s.events), s.children ? M(s.children, i) : s.html !== void 0 ? i.innerHTML = s.html : s.text !== void 0 && (i.textContent = s.text), e.appendChild(i);
    }
  }
  return e;
}, ct = (s) => {
  var e, t;
  return (t = (e = M(s)) == null ? void 0 : e.childNodes) == null ? void 0 : t[0];
}, mt = {
  default: st,
  success: N,
  info: ot,
  warining: nt,
  error: it
}, ut = "rb-toast", r = (s) => `${ut}-${s}`, w = {
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
  animation: r("slide"),
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
}, P = (s) => typeof s == "object" && "tagName" in s && s instanceof HTMLElement;
var f, a, v, Y, G;
class pt {
  constructor(e) {
    b(this, v);
    b(this, f);
    b(this, a);
    return B(this, a, {
      ...w,
      ...e,
      icon: {
        ...w.icon,
        ...(e == null ? void 0 : e.icon) ?? {}
      }
    }), typeof e.content == "object" && !P(e.content) && (o(this, a).content = {
      ...w.content,
      ...e.content
    }), B(this, f, p(this, v, Y).call(this)), this;
  }
  addClasses() {
    var l, c, m, u, C, g;
    const e = r("alert"), t = (l = o(this, a)) != null && l.type ? r((c = o(this, a)) == null ? void 0 : c.type) : r("default"), i = (m = o(this, a)) != null && m.design ? r((u = o(this, a)) == null ? void 0 : u.design) : r("standard"), n = (C = o(this, a)) != null && C.theme ? r((g = o(this, a)) == null ? void 0 : g.theme) : r("light");
    return o(this, f).classes = [e, t, i, n], o(this, a).classNames && (o(this, f).classes = [
      .../* @__PURE__ */ new Set([...o(this, f).classes, ...o(this, a).classNames])
    ]), this;
  }
  createTitle() {
    var i, n;
    const e = (n = (i = o(this, a)) == null ? void 0 : i.content) == null ? void 0 : n.title;
    if (!e)
      return;
    const t = {
      tag: "div",
      classes: [r("title")],
      children: []
    };
    return e && typeof e == "object" ? (e.iconUrl && t.children.push({
      tag: "img",
      attrs: {
        src: e == null ? void 0 : e.iconUrl
      },
      classes: [r("title-icon")]
    }), e.text && t.children.push({
      tag: "span",
      text: e.text,
      classes: [r("title-text")]
    })) : typeof e == "string" && t.children.push({
      tag: "span",
      html: e,
      classes: [r("title-text")]
    }), t;
  }
  addBody() {
    var n, l, c, m, u, C, g, j, S, O, V, Z, k, z, D;
    const e = {
      tag: "div",
      classes: [r("content-wrapper")],
      children: []
    }, t = {
      tag: "div",
      classes: [r("body")],
      children: []
    };
    if (P(o(this, a).content))
      return t.children.push({
        tag: "div",
        domElement: o(this, a).content,
        classes: []
      }), o(this, f).children.push(t), this;
    if (o(this, a).hasIcon) {
      const L = {
        tag: "img",
        attrs: {
          src: (l = (n = o(this, a)) == null ? void 0 : n.icon) != null && l.url ? (m = (c = o(this, a)) == null ? void 0 : c.icon) == null ? void 0 : m.url : mt[(u = o(this, a)) == null ? void 0 : u.type] ?? N
        },
        classes: [r("alert-icon")]
      };
      (g = (C = o(this, a)) == null ? void 0 : C.icon) != null && g.size ? L.classes.push(r(`alert-icon-${(S = (j = o(this, a)) == null ? void 0 : j.icon) == null ? void 0 : S.size}`)) : L.classes.push(r("alert-icon-small")), (V = (O = o(this, a)) == null ? void 0 : O.icon) != null && V.classes && L.classes.push(...(k = (Z = o(this, a)) == null ? void 0 : Z.icon) == null ? void 0 : k.classes), e.children.push(L);
    }
    typeof o(this, a).content == "object" && ((z = o(this, a).content) != null && z.message) ? t.children.push({
      tag: "div",
      html: (D = o(this, a).content) == null ? void 0 : D.message,
      classes: [r("message")]
    }) : typeof o(this, a).content == "string" && t.children.push({
      tag: "span",
      html: o(this, a).content,
      classes: [r("message")]
    });
    const i = this.createTitle();
    return i && t.children && t.children.unshift(i), e.children.push(t), o(this, f).children.push(e), this;
  }
  addActionButtons() {
    const e = o(this, a).content;
    if (typeof e != "object" || !Array.isArray(e == null ? void 0 : e.buttons))
      return this;
    if ((e == null ? void 0 : e.buttons.length) > 0) {
      const t = {
        tag: "div",
        classes: [r("alert-btn-group")],
        children: []
      };
      t.children = e == null ? void 0 : e.buttons.map(p(this, v, G)), o(this, f).children.push(t);
    }
    return this;
  }
  addCloseBtn() {
    if (o(this, a).isCloseable) {
      const e = {
        tag: "span",
        html: "&#10005;",
        classes: [r("close-btn")]
      };
      o(this, f).children.push(e);
    }
    return this;
  }
  addProgressBar() {
    return o(this, a).hasProgressBar && o(this, f).children.push({
      tag: "div",
      text: "",
      classes: [r("alert-progress-bar")],
      children: [
        {
          tag: "div",
          text: "",
          classes: [r("alert-progress-bar-fill")]
        }
      ]
    }), this;
  }
  toHtml() {
    return ct(o(this, f));
  }
}
f = new WeakMap(), a = new WeakMap(), v = new WeakSet(), Y = function() {
  return {
    tag: "div",
    classes: [],
    children: []
  };
}, G = function(e) {
  const t = {
    tag: "button",
    children: [],
    classes: [],
    events: {
      click: e.onClick ?? (() => {
      })
    }
  };
  if (t.classes = [
    r("btn"),
    r(`btn-${(e == null ? void 0 : e.type) ?? "default"}`),
    ...e.classes ?? []
  ], e.iconUrl) {
    const i = {
      tag: "img",
      attrs: {
        src: e.iconUrl
      },
      classes: [r("btn-icon-small")]
    };
    t.children.push(i);
  }
  if (e.label !== void 0) {
    const i = {
      tag: "span",
      html: e.label,
      classes: [r("btn-label")]
    };
    t.children.push(i);
  }
  return t;
};
const gt = (s) => s && (typeof s == "string" || s.title !== void 0 || (s == null ? void 0 : s.message) !== void 0 || P(s)), K = (s) => {
  if (!gt(s == null ? void 0 : s.content))
    throw new Error(
      "Only string, HTMLElement or an object having keys title, message, buttons is supported as content"
    );
  return new pt(s).addClasses().addBody().addActionButtons().addCloseBtn().addProgressBar().toHtml();
}, A = () => {
}, Ct = {
  animationClassPrefix: "",
  animationKind: "animation",
  // event is dispatched once *-enter class is added and dom is staring to appear
  onEnter: A,
  // event is dispatched once *-enter class already added and animationKindend event was triggered
  onEntered: A,
  // event is dispatched once *-exits class is added and dom is staring to disappear
  onExit: A,
  // event is dispatched once *-exit class already added and animationKindend event was triggered
  onExited: A,
  // if there is no transtionend or animationend event is triggered after this timeout, it will go to the next phase -entered or -exited
  animationTimeout: 500
}, _ = (s) => typeof s == "object" && ((s || {}).tagName || (s == null ? void 0 : s.nodeName));
var E, x;
class bt {
  constructor(e, t) {
    d(this, "options");
    d(this, "node");
    b(this, E, () => {
      var e, t;
      (t = (e = this.node) == null ? void 0 : e.classList) != null && t.contains(`${this.options.animationClassPrefix}-enter`) && (this.node.classList.remove(`${this.options.animationClassPrefix}-enter`), this.node.classList.add(`${this.options.animationClassPrefix}-entered`), this.cleanupAnimationEventListners("enter"), typeof this.options.onEntered == "function" && this.options.onEntered());
    });
    b(this, x, () => {
      var e, t, i;
      (t = (e = this.node) == null ? void 0 : e.classList) != null && t.contains(`${this.options.animationClassPrefix}-exit`) && (this.node.classList.remove(`${this.options.animationClassPrefix}-exit`), this.node.classList.add(`${this.options.animationClassPrefix}-exited`), this.cleanupAnimationEventListners("exit"), (i = this.node) == null || i.remove(), typeof this.options.onExited == "function" && this.options.onExited());
    });
    this.options = {
      ...Ct,
      ...t || {}
    }, this.node = e, this.validate();
  }
  validate() {
    var e;
    if (!_(this.node))
      throw new Error("node must be HTML Element");
    if (!["animation", "transition"].includes(this.options.animationKind))
      throw new Error("animationKind must be either animation or transition");
    if (typeof this.options.animationClassPrefix != "string" || !((e = this.options.animationClassPrefix) != null && e.length))
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
  cleanupAnimationEventListners(e) {
    let t;
    e === "enter" ? t = o(this, E) : e === "exit" && (t = o(this, x)), t && this.node && this.node.removeEventListener(`${this.options.animationKind}end`, t);
  }
  handleAnimationTimeout(e) {
    const t = Date.now(), i = setInterval(() => {
      if (!this.node) {
        clearInterval(i);
        return;
      }
      if (Date.now() - t > this.options.animationTimeout)
        if (this.node.classList.contains(`${this.options.animationClassPrefix}-${e}`)) {
          clearInterval(i);
          return;
        } else {
          e === "entered" ? o(this, E).call(this) : o(this, x).call(this), clearInterval(i);
          return;
        }
    }, 100);
  }
  startEnteringAnimation() {
    this.node.classList.add(`${this.options.animationClassPrefix}-enter`), typeof this.options.onEnter == "function" && this.options.onEnter(), this.handleAnimationTimeout("entered"), this.node.addEventListener(`${this.options.animationKind}end`, o(this, E));
  }
  startExitingAnimation() {
    this.node.classList.remove(`${this.options.animationClassPrefix}-entered`), typeof this.options.onExit == "function" && this.options.onExit(), this.node.classList.add(`${this.options.animationClassPrefix}-exit`), this.handleAnimationTimeout("exited"), this.node.addEventListener(`${this.options.animationKind}end`, o(this, x));
  }
  mount(e = "append", t) {
    if (!_(t))
      throw new Error("parent must be HTML Element");
    if (e !== "append" && e !== "prepend")
      throw new Error("direction must be either append or prepend");
    e === "append" ? t.appendChild(this.node) : e === "prepend" && t.prepend(this.node), this.node.classList.add(this.options.animationClassPrefix), setTimeout(this.startEnteringAnimation.bind(this), 100);
  }
  appendChild(e) {
    this.mount("append", e);
  }
  prepend(e) {
    this.mount("prepend", e);
  }
  append(e) {
    this.mount("append", e);
  }
  remove() {
    this.startExitingAnimation();
  }
}
E = new WeakMap(), x = new WeakMap();
const T = (s, e) => {
  if (typeof s != "boolean")
    throw new Error(`'${e}' must be boolean`);
}, y = (s, e, t) => {
  if (!e.includes(s))
    throw new Error(`'${t}' must be either one of these ${e}`);
}, wt = (s, e, t) => {
  if (!Array.isArray(s) || Array.isArray(s) && s.length > 0 && typeof (s == null ? void 0 : s[0]) !== e)
    throw new Error(`'${t}' must be an array of ${e}`);
}, U = (s, e) => {
  if (typeof s != "function")
    throw new Error(`'${e}' must be a function`);
}, J = (s) => {
  const e = {
    content: (t) => {
      if (!t)
        throw new Error("Content is required");
      if (typeof t != "string" && !P(t) && !t.title && !t.message)
        throw new Error(
          "Content must be either string, HTMLElement or an object having keys title, message and buttons"
        );
    },
    isCloseable: (t) => {
      T(t, "isCloseable");
    },
    autoClose: (t) => {
      T(t, "autoClose");
    },
    type: (t) => {
      y(t, ["default", "success", "info", "warning", "error"], "type");
    },
    design: (t) => {
      y(t, ["minimal", "standard", "colorful", "gradient"], "design");
    },
    position: (t) => {
      y(
        t,
        ["top-left", "top-right", "top-center", "bottom-left", "bottom-right", "center"],
        "position"
      );
    },
    hasIcon: (t) => {
      T(t, "hasIcon");
    },
    hasProgressBar: (t) => {
      T(t, "hasProgressBar");
    },
    progress: (t) => {
      if (t !== void 0 && typeof t != "number")
        throw new Error("progress must be number >= 0 and <= 100");
    },
    classNames: (t) => {
      if (t !== void 0 && (!Array.isArray(t) || Array.isArray(t) && t.length > 0 && typeof (t == null ? void 0 : t[0]) != "string"))
        throw new Error("classNames must be an array of strings");
    },
    theme: (t) => {
      y(t, ["light", "dark", "system"], "theme");
    },
    animation: (t) => {
      y(t, ["slide", "bounce", "fade", "zoom"], "animation");
    },
    icon: (t) => {
      if (t !== void 0 && typeof t != "object")
        throw new Error("icon must be an object");
      if (t != null && t.url && typeof t.url != "string")
        throw new Error("icon.url must be a string");
      typeof (t == null ? void 0 : t.size) < "u" && y(t.size, ["small", "medium", "large"], "icon.size"), t.classes && wt(t.classes, "string", "icon.classes");
    },
    offset: (t) => {
      if (t !== void 0 && typeof t != "object")
        throw new Error("offset must be an object with x and y keys");
    },
    duration: (t) => {
      if (t && (typeof t != "number" || t < 0))
        throw new Error("duration must be a number >= 0");
    },
    onClose: (t) => {
      U(t, "onClose");
    },
    onShow: (t) => {
      U(t, "onShow");
    }
  };
  Object.keys(e).forEach((t) => {
    s[t] !== void 0 && e[t](s[t]);
  });
}, W = r("container"), yt = (s = "slide") => ({
  slide: r("slide"),
  fade: r("fade"),
  zoom: r("zoom"),
  bounce: r("bounce")
})[s] ?? s, Et = (s) => {
  const e = [
    r("slide"),
    r("fade"),
    r("zoom"),
    r("bounce")
  ];
  return Array.from(s.classList).filter((i) => e.some((n) => {
    if (i.startsWith(n))
      return i;
  }));
};
class xt {
  constructor(e, t, i) {
    d(this, "options");
    d(this, "content");
    d(this, "delegator");
    d(this, "mountedIn");
    d(this, "appearedAt");
    d(this, "element");
    d(this, "domManager");
    this.options = t, this.content = e, this.delegator = i, this.element = K({
      ...t,
      content: e
    });
  }
  close() {
    this.delegator.close(this);
  }
  closeAll() {
    this.delegator.closeAll();
  }
  update(e, t) {
    J({
      content: e,
      ...t
    });
    const i = {
      ...this.options,
      ...t,
      content: e,
      offset: {
        ...this.options.offset,
        ...t == null ? void 0 : t.offset
      },
      icon: {
        ...this.options.icon,
        ...t == null ? void 0 : t.icon
      }
    };
    try {
      const n = K(i), l = Et(this.element);
      n.classList.add(...l), this.element.innerHTML = n.innerHTML, this.element.setAttribute("class", n.getAttribute("class")), this.delegator.update(this, e, t);
    } catch {
    }
  }
}
var h, Q, H, I, R, X;
class vt {
  constructor() {
    b(this, h);
    d(this, "options", {});
    d(this, "toasts", []);
  }
  notify(e, t = w) {
    var l, c, m;
    J({
      content: e,
      ...t
    }), this.options = {
      ...w,
      ...t,
      offset: {
        ...w.offset,
        ...t == null ? void 0 : t.offset
      },
      icon: {
        ...w.icon,
        ...t == null ? void 0 : t.icon
      }
    }, p(this, h, R).call(this, {
      "--toast-position-offset-x": CSS.px(((l = this.options.offset) == null ? void 0 : l.x) ?? 30),
      "--toast-position-offset-y": CSS.px(((c = this.options.offset) == null ? void 0 : c.y) ?? 30)
    });
    const i = p(this, h, X).call(this, (m = this.options) == null ? void 0 : m.position), n = new xt(e, this.options, this);
    return n.domManager = p(this, h, Q).call(this, i, n.element), n.mountedIn = i, n.appearedAt = Date.now(), this.toasts.push(n), n;
  }
  close(e) {
    var t, i;
    this.toasts = this.toasts.filter((n) => n !== e), (i = (t = e.domManager) == null ? void 0 : t.remove) == null || i.call(t);
  }
  update(e, t, i) {
    const n = this.toasts.find((l) => l.element === e.element);
    n && (p(this, h, H).call(this, n.domManager, e.element), p(this, h, I).call(this, e.element));
  }
  closeAll() {
    this.toasts.forEach((e) => {
      this.close(e);
    });
  }
  success(e, t) {
    return this.notify(e, { ...t, type: "success" });
  }
  info(e, t) {
    return this.notify(e, { ...t, type: "info" });
  }
  warn(e, t) {
    return this.notify(e, { ...t, type: "warning" });
  }
  error(e, t) {
    return this.notify(e, { ...t, type: "error" });
  }
}
h = new WeakSet(), Q = function(e, t) {
  var l, c, m;
  const i = (l = this.options) != null && l.animation ? yt((c = this.options) == null ? void 0 : c.animation) : "rb-toast-slide", n = new bt(t, {
    animationClassPrefix: i,
    animationKind: ["rb-toast-slide"].includes(i) ? "transition" : "animation",
    onEnter: () => {
    },
    onExit: () => {
    },
    onEntered: () => {
      if (p(this, h, I).call(this, t), typeof this.options.onShow == "function" && this.options.onShow(), this.options.duration && this.options.autoClose) {
        let u = this.options.duration;
        this.options.duration < 1e3 && (console.warn("Duration should be greater than 1000ms"), u = 3e3), setTimeout(() => {
          var C;
          try {
            (C = n == null ? void 0 : n.remove) == null || C.call(n), this.toasts = this.toasts.filter((g) => g.element !== t);
          } catch (g) {
            console.error("Failed to auto close toast", g);
          }
        }, u);
      }
    },
    onExited: () => {
      var u;
      (this.toasts.length === 0 || ((u = e == null ? void 0 : e.children) == null ? void 0 : u.length) === 0) && e.remove(), typeof this.options.onClose == "function" && this.options.onClose();
    },
    animationTimeout: 300
  });
  return p(this, h, H).call(this, n, t), ["bottom-right", "bottom-left", "center"].includes((m = this.options) == null ? void 0 : m.position) ? n.append(e) : n.prepend(e), n;
}, H = function(e, t) {
  var n;
  const i = t.querySelector(`.${r("close-btn")}`);
  i && ((n = this.options) != null && n.isCloseable ? i.addEventListener("click", () => {
    var l;
    (l = e == null ? void 0 : e.remove) == null || l.call(e), typeof this.options.onClose == "function" && this.options.onClose();
  }) : i.remove());
}, I = function(e) {
  var i, n;
  const t = e.querySelector(
    `.${r("alert-progress-bar-fill")}`
  );
  if (t && (i = this.options) != null && i.hasProgressBar) {
    let l = ((n = this.options) == null ? void 0 : n.progress) ?? 0;
    l > 100 ? l = 100 : l < 0 && (l = 0), t.animate(
      // @ts-ignore
      [{ width: CSS.percent(l) }, { width: "100%" }],
      { duration: this.options.duration, fill: "forwards" }
    );
  }
}, R = function(e) {
  var i;
  const t = document.documentElement;
  if (e && ((i = Object.keys(e)) == null ? void 0 : i.length) > 0)
    for (const [n, l] of Object.entries(e))
      t.style.setProperty(n, l.toString());
}, X = function(e, t = document.body) {
  let i = t.querySelector(
    `.${W}.${r(e)}`
  );
  return i || (i = document.createElement("div"), i.classList.add(W, r(e)), t.appendChild(i)), i;
};
const At = new vt();
export {
  At as default
};
