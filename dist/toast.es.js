var d = (t) => {
  throw TypeError(t);
};
var g = (t, e, s) => e.has(t) || d("Cannot " + s);
var i = (t, e, s) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s);
var r = (t, e, s) => (g(t, e, "access private method"), s);
const u = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0%200%200)'%3e%3cpath%20d='M19.2803%206.76264C19.5732%207.05553%2019.5732%207.53041%2019.2803%207.8233L9.86348%2017.2402C9.57058%2017.533%209.09571%2017.533%208.80282%2017.2402L4.71967%2013.157C4.42678%2012.8641%204.42678%2012.3892%204.71967%2012.0963C5.01256%2011.8035%205.48744%2011.8035%205.78033%2012.0963L9.33315%2015.6492L18.2197%206.76264C18.5126%206.46975%2018.9874%206.46975%2019.2803%206.76264Z'%20fill='%23ffffff'/%3e%3c/svg%3e", p = "rb-toast", m = "container", h = {
  classNames: [],
  container: document.body,
  autoCloseAfter: 3e3,
  showProgress: !1,
  position: "top-right",
  closeable: !0,
  type: "success",
  progressbarClasses: [],
  onClose: () => {
  },
  onShow: () => {
  }
}, n = (t) => `${p}-${t}`, C = (t) => typeof t == "object" && "tagName" in t, L = (t, e) => {
  const s = document.createElement("div");
  s.classList.add(n("alert")), e != null && e.type && s.classList.add(n(e.type)), e != null && e.classNames && e.classNames.length > 0 && s.classList.add(...e.classNames);
  let a = document.createElement("div");
  if (a.classList.add(n("alert-content")), e != null && e.closeable) {
    const l = document.createElement("div");
    l.classList.add(n("alert-close-btn")), l.textContent = "x", a.appendChild(l);
  }
  if (C(t))
    s.appendChild(t);
  else if (typeof t == "object" && ("message" in t || "title" in t)) {
    if ("title" in t) {
      const l = document.createElement("div");
      l.classList.add(n("alert-title")), l.textContent = t.title, a.appendChild(l), s.appendChild(a);
    }
    if ("message" in t) {
      const l = document.createElement("div");
      l.classList.add(n("alert-message")), l.textContent = t.message, s.appendChild(a);
    }
  } else if (typeof t == "string") {
    const l = document.createElement("div");
    l.classList.add(n("alert-message")), l.textContent = t;
    const c = document.createElement("img");
    c.classList.add(n("icon")), c.setAttribute("src", u), l.prepend(c), a.appendChild(l), s.appendChild(a);
  } else
    throw new Error(
      "Only string, HTMLElement or an object having keys message, heading is supported as content"
    );
  return s;
};
class v {
  constructor(e, s, a) {
    this.options = s, this.content = e, this.delegator = a, this.element = L(e, s);
  }
  close() {
    this.delegator.close(this);
  }
  update(e, s) {
    this.delegator.update(this, e, s);
  }
}
var o, f;
class w {
  constructor() {
    i(this, o);
    this.options = h, this.toasts = [];
  }
  notify(e, s) {
    const a = {
      ...h,
      ...s ?? {}
    }, l = r(this, o, f).call(this, a == null ? void 0 : a.position), c = new v(e, a, this);
    return l.appendChild(c.element), c.mountedIn = l, c.appearedAt = Date.now(), this.toasts.push(c), c;
  }
  close(e) {
    console.log("closing toast:", e);
  }
  update(e, s, a) {
    console.log("Updating toast:", e);
  }
  closeAll() {
  }
}
o = new WeakSet(), // @ts-ignore-ts(18028)
f = function(e, s = document.body) {
  console.log("CONTAINER:", s), console.log("container:", document);
  let a = s.querySelector(
    `.${n(m)}.${n(e)}`
  );
  return a || (a = document.createElement("div"), a.classList.add(
    n(m),
    n(e)
  ), s.appendChild(a)), a;
};
const E = new w();
export {
  E as default
};
