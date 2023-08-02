import { defineComponent as m, openBlock as s, createElementBlock as o, normalizeStyle as a, Fragment as _, renderList as h, normalizeClass as f, createElementVNode as l, createTextVNode as y, toDisplayString as d, createCommentVNode as r } from "vue";
const v = m({
  name: "Vue3Step",
  props: {
    width: {
      type: Number,
      default: 500
    },
    step: {
      type: Number,
      default: 1
    },
    list: {
      type: Array,
      default: () => []
    }
  }
});
const g = (e, n) => {
  const i = e.__vccOpts || e;
  for (const [c, p] of n)
    i[c] = p;
  return i;
}, w = { class: "step_item_number" }, k = {
  key: 1,
  t: "1690883422271",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3142",
  width: "200",
  height: "200"
}, S = /* @__PURE__ */ l("path", {
  d: "M503.808 47.104C248.832 47.104 40.96 254.976 40.96 509.952S248.832 972.8 503.808 972.8s462.848-207.872 462.848-462.848S758.784 47.104 503.808 47.104z m0 873.472c-226.304 0-410.624-184.32-410.624-410.624s184.32-410.624 410.624-410.624 410.624 184.32 410.624 410.624c-1.024 226.304-184.32 410.624-410.624 410.624z",
  fill: "#4799EB",
  "p-id": "3143"
}, null, -1), z = /* @__PURE__ */ l("path", {
  d: "M701.44 358.4L434.176 625.664l-122.88-122.88c-12.288-12.288-32.768-12.288-45.056 0-12.288 12.288-12.288 32.768 0 45.056l144.384 144.384c6.144 6.144 15.36 9.216 23.552 9.216 8.192 0 17.408-3.072 23.552-9.216l288.768-288.768c12.288-12.288 12.288-32.768 0-45.056-12.288-12.288-32.768-12.288-45.056 0z",
  fill: "#4799EB",
  "p-id": "3144"
}, null, -1), B = [
  S,
  z
], E = { class: "step_item_title" }, N = {
  key: 0,
  class: "step_item_line"
};
function V(e, n, i, c, p, F) {
  return s(), o("div", {
    class: "stepFlex",
    style: a({ width: `${e.width}px` })
  }, [
    (s(!0), o(_, null, h(e.list, (u, t) => (s(), o("div", {
      class: f(["step_item", {
        active: e.step == t + 1
        /* 'success': step > (index + 1) */
      }]),
      style: a({ flex: e.list.length }),
      key: t
    }, [
      l("div", w, [
        e.step > t + 1 ? r("", !0) : (s(), o(_, { key: 0 }, [
          y(d(t + 1), 1)
        ], 64)),
        e.step > t + 1 ? (s(), o("svg", k, B)) : r("", !0)
      ]),
      l("div", E, d(u.title), 1),
      t + 1 != e.list.length ? (s(), o("div", N)) : r("", !0)
    ], 6))), 128))
  ], 4);
}
const $ = /* @__PURE__ */ g(v, [["render", V]]), C = [$], b = function(e) {
  C.forEach((n) => {
    e.component(n.name, n);
  });
}, M = { install: b };
export {
  $ as Vue3Step,
  M as default
};
