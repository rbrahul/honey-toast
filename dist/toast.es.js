var W = Object.defineProperty;
var S = (e) => {
  throw TypeError(e);
};
var Y = (e, t, s) => t in e ? W(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var d = (e, t, s) => Y(e, typeof t != "symbol" ? t + "" : t, s), T = (e, t, s) => t.has(e) || S("Cannot " + s);
var n = (e, t, s) => (T(e, t, "read from private field"), s ? s.call(e) : t.get(e)), C = (e, t, s) => t.has(e) ? S("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), A = (e, t, s, i) => (T(e, t, "write to private field"), i ? i.call(e, s) : t.set(e, s), s), w = (e, t, s) => (T(e, t, "access private method"), s);
const G = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.0016%202.00098C12.4158%202.00098%2012.7516%202.33676%2012.7516%202.75098V3.53801C16.5416%203.9143%2019.5016%207.11197%2019.5016%2011.001V14.115L20.1938%2015.9609C20.7454%2017.4319%2019.6581%2019.001%2018.0871%2019.001H15.0628C15.0287%2020.6631%2013.6701%2021.9995%2011.9998%2021.9995C10.3295%2021.9995%208.97089%2020.6631%208.93682%2019.001H5.9161C4.34514%2019.001%203.25776%2017.4319%203.80936%2015.9609L4.5016%2014.115V11.001C4.5016%207.11197%207.46161%203.9143%2011.2516%203.53801V2.75098C11.2516%202.33676%2011.5874%202.00098%2012.0016%202.00098ZM10.4375%2019.001C10.471%2019.8339%2011.1573%2020.4995%2011.9998%2020.4995C12.8423%2020.4995%2013.5286%2019.8339%2013.5622%2019.001H10.4375ZM6.0016%2011.001C6.0016%207.68727%208.68789%205.00098%2012.0016%205.00098C15.3153%205.00098%2018.0016%207.68727%2018.0016%2011.001V14.1168C18.0016%2014.2955%2018.0337%2014.4727%2018.0965%2014.64L18.7893%2016.4876C18.9732%2016.9779%2018.6108%2017.501%2018.0871%2017.501H5.9161C5.39244%2017.501%205.02998%2016.9779%205.21385%2016.4876L5.90673%2014.64C5.96946%2014.4727%206.0016%2014.2955%206.0016%2014.1168V11.001Z'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e", J = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20d='M6.21967%207.28033C5.92678%206.98744%205.92678%206.51256%206.21967%206.21967C6.51256%205.92678%206.98744%205.92678%207.28033%206.21967L11.999%2010.9384L16.7176%206.2198C17.0105%205.92691%2017.4854%205.92691%2017.7782%206.2198C18.0711%206.51269%2018.0711%206.98757%2017.7782%207.28046L13.0597%2011.999L17.7782%2016.7176C18.0711%2017.0105%2018.0711%2017.4854%2017.7782%2017.7782C17.4854%2018.0711%2017.0105%2018.0711%2016.7176%2017.7782L11.999%2013.0597L7.28033%2017.7784C6.98744%2018.0713%206.51256%2018.0713%206.21967%2017.7784C5.92678%2017.4855%205.92678%2017.0106%206.21967%2016.7177L10.9384%2011.999L6.21967%207.28033Z'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e", K = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20d='M19.2803%206.76264C19.5732%207.05553%2019.5732%207.53041%2019.2803%207.8233L9.86348%2017.2402C9.57058%2017.533%209.09571%2017.533%208.80282%2017.2402L4.71967%2013.157C4.42678%2012.8641%204.42678%2012.3892%204.71967%2012.0963C5.01256%2011.8035%205.48744%2011.8035%205.78033%2012.0963L9.33315%2015.6492L18.2197%206.76264C18.5126%206.46975%2018.9874%206.46975%2019.2803%206.76264Z'%20fill='%23ffffff'/%3e%3c/svg%3e", Q = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20d='M16.6272%204.49741C17.0414%204.49741%2017.3772%204.8332%2017.3772%205.24741V6.9957C17.3772%207.40992%2017.0414%207.7457%2016.6272%207.7457C16.213%207.7457%2015.8772%207.40992%2015.8772%206.9957V5.24741C15.8772%204.8332%2016.213%204.49741%2016.6272%204.49741Z'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20d='M15.8262%209.49781C15.8262%209.05598%2016.1844%208.69781%2016.6262%208.69781C17.068%208.69781%2017.4272%209.05598%2017.4272%209.49781C17.4272%209.93964%2017.069%2010.2978%2016.6272%2010.2978C16.1854%2010.2978%2015.8262%209.93964%2015.8262%209.49781Z'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.2517%207.375C11.2517%204.40647%2013.6582%202%2016.6267%202C19.5952%202%2022.0017%204.40647%2022.0017%207.375C22.0017%2010.3435%2019.5952%2012.75%2016.6267%2012.75C13.6582%2012.75%2011.2517%2010.3435%2011.2517%207.375ZM16.6267%203.5C14.4866%203.5%2012.7517%205.2349%2012.7517%207.375C12.7517%209.5151%2014.4866%2011.25%2016.6267%2011.25C18.7668%2011.25%2020.5017%209.5151%2020.5017%207.375C20.5017%205.2349%2018.7668%203.5%2016.6267%203.5Z'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10.8913%203.58234C7.27568%204.11887%204.5016%207.23584%204.5016%2011.0007V14.1147L3.80936%2015.9607C3.25776%2017.4316%204.34514%2019.0007%205.9161%2019.0007H8.93682C8.97089%2020.6629%2010.3295%2021.9993%2011.9998%2021.9993C13.6701%2021.9993%2015.0287%2020.6629%2015.0628%2019.0007H18.0871C19.6581%2019.0007%2020.7454%2017.4316%2020.1938%2015.9607L19.5016%2014.1147V13.6218C19.0282%2013.84%2018.5257%2014.006%2018.0016%2014.1124V14.1166C18.0016%2014.2952%2018.0337%2014.4724%2018.0965%2014.6397L18.7893%2016.4874C18.9732%2016.9777%2018.6108%2017.5007%2018.0871%2017.5007H5.9161C5.39244%2017.5007%205.02998%2016.9777%205.21385%2016.4874L5.90673%2014.6397C5.96946%2014.4724%206.0016%2014.2952%206.0016%2014.1166V11.0007C6.0016%208.36516%207.70092%206.12648%2010.0637%205.32059C10.2582%204.69854%2010.5387%204.11448%2010.8913%203.58234ZM11.9998%2020.4993C11.1573%2020.4993%2010.471%2019.8337%2010.4375%2019.0007H13.5622C13.5286%2019.8337%2012.8423%2020.4993%2011.9998%2020.4993Z'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e", R = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20d='M12.0006%204.5C11.2951%204.5%2010.7329%205.09006%2010.7671%205.79476L11.2515%2015.7858C11.2709%2016.1855%2011.6005%2016.4995%2012.0006%2016.4995C12.4007%2016.4995%2012.7304%2016.1855%2012.7497%2015.7858L13.2341%205.79476C13.2683%205.09006%2012.7061%204.5%2012.0006%204.5Z'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20d='M11.9994%2017.85C11.5023%2017.85%2011.0994%2018.2529%2011.0994%2018.75C11.0994%2019.2471%2011.5023%2019.65%2011.9994%2019.65H12.0004C12.4974%2019.65%2012.9004%2019.2471%2012.9004%2018.75C12.9004%2018.2529%2012.4974%2017.85%2012.0004%2017.85H11.9994Z'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e", X = [
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
  "tbody",
  "tr",
  "th",
  "td",
  "b",
  "i",
  "ul",
  "li",
  "span",
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "a",
  "input",
  "button"
], tt = [
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
  "charset"
], et = (e, t) => {
  const s = {};
  return t.forEach((i) => {
    i in e && (s[i] = e[i]);
  }), s;
}, D = (e, t) => {
  for (const [s, i] of Object.entries(t))
    e.setAttribute(s, i);
}, st = (e) => typeof e == "object" && e !== null, it = (e, t) => {
  if (st(t))
    for (const [s, i] of Object.entries(t))
      e.addEventListener(s, i);
}, nt = () => new DocumentFragment(), P = (e, t) => {
  if (t = t ?? nt(), Array.isArray(e))
    return e.forEach((i) => P(i, t)), t;
  if (!e || !(e != null && e.tag))
    return t;
  if (e.domElement)
    return t.appendChild(e.domElement), t;
  const s = e.tag.toLocaleLowerCase();
  if (X.includes(s)) {
    const i = document.createElement(s);
    if (i) {
      e.attrs && typeof e.attrs == "object" && D(i, e.attrs);
      const a = et(e, tt);
      D(i, a), e.classes && Array.isArray(e.classes) && i.classList.add(...e.classes), it(i, e == null ? void 0 : e.events), e.children ? P(e.children, i) : e.html !== void 0 ? i.innerHTML = e.html : e.text !== void 0 && (i.textContent = e.text), t.appendChild(i);
    }
  }
  return t;
}, ot = (e) => {
  var t, s;
  return (s = (t = P(e)) == null ? void 0 : t.childNodes) == null ? void 0 : s[0];
}, at = {
  default: G,
  success: K,
  info: R,
  warining: Q,
  error: J
}, rt = "rb-toast", o = (e) => `${rt}-${e}`, y = {
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
  animation: o("slide"),
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
}, $ = (e) => typeof e == "object" && "tagName" in e && e instanceof HTMLElement;
var h, r, v, F, U;
class lt {
  constructor(t) {
    C(this, v);
    C(this, h);
    C(this, r);
    return A(this, r, {
      ...y,
      ...t,
      icon: {
        ...y.icon,
        ...(t == null ? void 0 : t.icon) ?? {}
      }
    }), typeof t.content == "object" && !$(t.content) && (n(this, r).content = {
      ...y.content,
      ...t.content
    }), A(this, h, w(this, v, F).call(this)), this;
  }
  addClasses() {
    var l, f, m, u, p, c;
    const t = o("alert"), s = (l = n(this, r)) != null && l.type ? o((f = n(this, r)) == null ? void 0 : f.type) : o("default"), i = (m = n(this, r)) != null && m.design ? o((u = n(this, r)) == null ? void 0 : u.design) : o("standard"), a = (p = n(this, r)) != null && p.theme ? o((c = n(this, r)) == null ? void 0 : c.theme) : o("light");
    return n(this, h).classes = [
      t,
      s,
      i,
      a
    ], n(this, r).classNames && (n(this, h).classes = [
      .../* @__PURE__ */ new Set([
        ...n(this, h).classes,
        ...n(this, r).classNames
      ])
    ]), this;
  }
  createTitle() {
    var i, a;
    const t = (a = (i = n(this, r)) == null ? void 0 : i.content) == null ? void 0 : a.title;
    if (!t)
      return;
    const s = {
      tag: "div",
      classes: [o("title")],
      children: []
    };
    return t && typeof t == "object" ? (t.iconUrl && s.children.push({
      tag: "img",
      attrs: {
        src: t == null ? void 0 : t.iconUrl
      },
      classes: [o("title-icon")]
    }), t.text && s.children.push({
      tag: "span",
      text: t.text,
      classes: [o("title-text")]
    })) : typeof t == "string" && s.children.push({
      tag: "span",
      html: t,
      classes: [o("title-text")]
    }), s;
  }
  addBody() {
    var a, l, f, m, u, p, c, B, H, M, I, V, Z, j, O;
    const t = {
      tag: "div",
      classes: [o("content-wrapper")],
      children: []
    }, s = {
      tag: "div",
      classes: [o("body")],
      children: []
    };
    if ($(n(this, r).content))
      return s.children.push({
        tag: "div",
        domElement: n(this, r).content,
        classes: []
      }), n(this, h).children.push(s), this;
    if (n(this, r).hasIcon) {
      const b = {
        tag: "img",
        attrs: {
          src: (l = (a = n(this, r)) == null ? void 0 : a.icon) != null && l.url ? (m = (f = n(this, r)) == null ? void 0 : f.icon) == null ? void 0 : m.url : at[(u = n(this, r)) == null ? void 0 : u.type] ?? K
        },
        classes: [o("alert-icon")]
      };
      (c = (p = n(this, r)) == null ? void 0 : p.icon) != null && c.size ? b.classes.push(o(`alert-icon-${(H = (B = n(this, r)) == null ? void 0 : B.icon) == null ? void 0 : H.size}`)) : b.classes.push(o("alert-icon-small")), (I = (M = n(this, r)) == null ? void 0 : M.icon) != null && I.classes && b.classes.push(...(Z = (V = n(this, r)) == null ? void 0 : V.icon) == null ? void 0 : Z.classes), t.children.push(b);
    }
    typeof n(this, r).content == "object" && ((j = n(this, r).content) != null && j.message) ? s.children.push({
      tag: "div",
      html: (O = n(this, r).content) == null ? void 0 : O.message,
      classes: [o("message")]
    }) : typeof n(this, r).content == "string" && s.children.push({
      tag: "span",
      html: n(this, r).content,
      classes: [o("message")]
    });
    const i = this.createTitle();
    return i && s.children && s.children.unshift(i), t.children.push(s), n(this, h).children.push(t), this;
  }
  addActionButtons() {
    const t = n(this, r).content;
    if (typeof t != "object" || !Array.isArray(t == null ? void 0 : t.buttons))
      return this;
    if ((t == null ? void 0 : t.buttons.length) > 0) {
      const s = {
        tag: "div",
        classes: [o("alert-btn-group")],
        children: []
      };
      s.children = t == null ? void 0 : t.buttons.map(w(this, v, U)), n(this, h).children.push(s);
    }
    return this;
  }
  addCloseBtn() {
    if (n(this, r).isCloseable) {
      const t = {
        tag: "span",
        html: "&#10005;",
        classes: [o("close-btn")]
      };
      n(this, h).children.push(t);
    }
    return this;
  }
  addProgressBar() {
    return n(this, h).children.push({
      tag: "div",
      text: "",
      classes: [o("alert-progress-bar")]
    }), this;
  }
  toHtml() {
    return ot(n(this, h));
  }
}
h = new WeakMap(), r = new WeakMap(), v = new WeakSet(), F = function() {
  return {
    tag: "div",
    classes: [],
    children: []
  };
}, U = function(t) {
  const s = {
    tag: "button",
    children: [],
    classes: [],
    events: {
      click: t.onClick ?? (() => {
      })
    }
  };
  if (s.classes = [o("btn"), o(`btn-${(t == null ? void 0 : t.type) ?? "default"}`), ...t.classes ?? []], t.iconUrl) {
    const i = {
      tag: "img",
      attrs: {
        src: t.iconUrl
      },
      classes: [o("btn-icon-small")]
    };
    s.children.push(i);
  }
  if (t.label !== void 0) {
    const i = {
      tag: "span",
      html: t.label,
      classes: [o("btn-label")]
    };
    s.children.push(i);
  }
  return s;
};
const ht = (e) => e && (typeof e == "string" || e.title !== void 0 || (e == null ? void 0 : e.message) !== void 0 || $(e)), dt = (e) => {
  if (console.log("ToastBuilderProps OPTIONS:", e), !ht(e == null ? void 0 : e.content))
    throw new Error(
      "Only string, HTMLElement or an object having keys title, message, buttons is supported as content"
    );
  return new lt(e).addClasses().addBody().addActionButtons().addCloseBtn().addProgressBar().toHtml();
}, L = () => {
}, ct = {
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
}, N = (e) => typeof e == "object" && ((e || {}).tagName || (e == null ? void 0 : e.nodeName));
var x, E;
class ft {
  constructor(t, s) {
    d(this, "options");
    d(this, "node");
    C(this, x, () => {
      var t, s;
      (s = (t = this.node) == null ? void 0 : t.classList) != null && s.contains(`${this.options.animationClassPrefix}-enter`) && (this.node.classList.remove(`${this.options.animationClassPrefix}-enter`), this.node.classList.add(`${this.options.animationClassPrefix}-entered`), this.cleanupAnimationEventListners("enter"), typeof this.options.onEntered == "function" && this.options.onEntered());
    });
    C(this, E, () => {
      var t, s, i;
      (s = (t = this.node) == null ? void 0 : t.classList) != null && s.contains(`${this.options.animationClassPrefix}-exit`) && (this.node.classList.remove(`${this.options.animationClassPrefix}-exit`), this.node.classList.add(`${this.options.animationClassPrefix}-exited`), this.cleanupAnimationEventListners("exit"), (i = this.node) == null || i.remove(), typeof this.options.onExited == "function" && this.options.onExited());
    });
    this.options = {
      ...ct,
      ...s || {}
    }, this.node = t, this.validate();
  }
  validate() {
    var t;
    if (!N(this.node))
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
    t === "enter" ? s = n(this, x) : t === "exit" && (s = n(this, E)), s && this.node && this.node.removeEventListener(`${this.options.animationKind}end`, s);
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
          t === "entered" ? n(this, x).call(this) : n(this, E).call(this), clearInterval(i);
          return;
        }
      console.log("Looking for animation to finish for :", t);
    }, 100);
  }
  startEnteringAnimation() {
    this.node.classList.add(`${this.options.animationClassPrefix}-enter`), typeof this.options.onEnter == "function" && this.options.onEnter(), this.handleAnimationTimeout("entered"), console.log(`${this.options.animationKind}end`), this.node.addEventListener(`${this.options.animationKind}end`, n(this, x));
  }
  startExitingAnimation() {
    this.node.classList.remove(`${this.options.animationClassPrefix}-entered`), typeof this.options.onExit == "function" && this.options.onExit(), this.node.classList.add(`${this.options.animationClassPrefix}-exit`), this.handleAnimationTimeout("exited"), this.node.addEventListener(`${this.options.animationKind}end`, n(this, E));
  }
  mount(t = "append", s) {
    if (!N(s))
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
x = new WeakMap(), E = new WeakMap();
const k = o("container");
class mt {
  constructor(t, s, i) {
    d(this, "options");
    d(this, "content");
    d(this, "delegator");
    d(this, "mountedIn");
    d(this, "appearedAt");
    d(this, "element");
    d(this, "domManager");
    this.options = s, this.content = t, this.delegator = i, this.element = dt({
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
    this.delegator.update(this, t, s);
  }
}
const ut = (e = "slide") => ({
  slide: o("slide"),
  fade: o("fade"),
  zoom: o("zoom"),
  bounce: o("bounce")
})[e] ?? e;
var g, _, z, q;
class pt {
  constructor() {
    C(this, g);
    d(this, "options", {});
    d(this, "toasts", []);
  }
  notify(t, s) {
    var l;
    this.options = {
      ...y,
      ...s ?? {}
    };
    const i = w(this, g, q).call(this, (l = this.options) == null ? void 0 : l.position), a = new mt(t, this.options, this);
    return a.domManager = w(this, g, _).call(this, i, a.element), a.mountedIn = i, a.appearedAt = Date.now(), this.toasts.push(a), a;
  }
  close(t) {
    var s, i;
    this.toasts = this.toasts.filter((a) => a !== t), (i = (s = t.domManager) == null ? void 0 : s.remove) == null || i.call(s);
  }
  // TODO: Implement update method
  update(t, s, i) {
    console.log("Updating toast:", t);
  }
  closeAll() {
    this.toasts.forEach((t) => {
      this.close(t);
    });
  }
}
g = new WeakSet(), _ = function(t, s) {
  var l, f, m;
  const i = (l = this.options) != null && l.animation ? ut((f = this.options) == null ? void 0 : f.animation) : "rb-toast-slide", a = new ft(s, {
    animationClassPrefix: i,
    animationKind: ["rb-toast-slide"].includes(i) ? "transition" : "animation",
    onEnter: () => {
    },
    onExit: () => {
    },
    onEntered: () => {
      if (typeof this.options.onShow == "function" && this.options.onShow(), this.options.duration && this.options.autoClose) {
        let u = this.options.duration;
        this.options.duration < 1e3 && (console.warn("Duration should be greater than 1000ms"), u = 3e3), setTimeout(() => {
          var p;
          try {
            (p = a == null ? void 0 : a.remove) == null || p.call(a), this.toasts = this.toasts.filter((c) => c.element !== s);
          } catch (c) {
            console.error("Failed to auto close toast", c);
          }
        }, u);
      }
    },
    onExited: () => {
      typeof this.options.onClose == "function" && this.options.onClose();
    },
    animationTimeout: 300
  });
  return w(this, g, z).call(this, a, s), ["bottom-right", "bottom-left", "center"].includes((m = this.options) == null ? void 0 : m.position) ? a.append(t) : a.prepend(t), a;
}, z = function(t, s) {
  var a;
  const i = s.querySelector(`.${o("close-btn")}`);
  i && ((a = this.options) != null && a.isCloseable ? i.addEventListener("click", () => {
    var l;
    (l = t == null ? void 0 : t.remove) == null || l.call(t), typeof this.options.onClose == "function" && this.options.onClose();
  }) : i.remove());
}, q = function(t, s = document.body) {
  let i = s.querySelector(
    `.${k}.${o(t)}`
  );
  return i || (i = document.createElement("div"), i.classList.add(k, o(t)), s.appendChild(i)), i;
};
const Ct = new pt();
export {
  Ct as default
};
