parcelRequire = (function(e, r, n, t) {
  var i = 'function' == typeof parcelRequire && parcelRequire,
    o = 'function' == typeof require && require;
  function u(n, t) {
    if (!r[n]) {
      if (!e[n]) {
        var f = 'function' == typeof parcelRequire && parcelRequire;
        if (!t && f) return f(n, !0);
        if (i) return i(n, !0);
        if (o && 'string' == typeof n) return o(n);
        var c = new Error("Cannot find module '" + n + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      (p.resolve = function(r) {
        return e[n][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[n] = new u.Module(n));
      e[n][0].call(l.exports, p, l, l.exports, this);
    }
    return r[n].exports;
    function p(e) {
      return u(p.resolve(e));
    }
  }
  (u.isParcelRequire = !0),
    (u.Module = function(e) {
      (this.id = e), (this.bundle = u), (this.exports = {});
    }),
    (u.modules = e),
    (u.cache = r),
    (u.parent = i),
    (u.register = function(r, n) {
      e[r] = [
        function(e, r) {
          r.exports = n;
        },
        {}
      ];
    });
  for (var f = 0; f < n.length; f++) u(n[f]);
  if (n.length) {
    var c = u(n[n.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = c)
      : 'function' == typeof define && define.amd
      ? define(function() {
          return c;
        })
      : t && (this[t] = c);
  }
  return u;
})(
  {
    hQC2: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.Provider = c),
          (exports.__SUPER_SECRET_CONTAINER_DEBUG_HOOK__ = l),
          (exports.Subscribe = exports.Container = void 0);
        var e = require('inferno'),
          t = s(require('create-inferno-context'));
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function n(e, t, s) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = s),
            e
          );
        }
        const r = (0, t.default)(null);
        class i {
          constructor() {
            n(this, 'state', void 0),
              n(this, '_listeners', []),
              a.forEach(e => e(this));
          }
          setState(e, t) {
            return Promise.resolve().then(() => {
              let s;
              if (null == (s = 'function' == typeof e ? e(this.state) : e))
                return void (t && t());
              this.state = Object.assign({}, this.state, s);
              let n = this._listeners.map(e => e());
              return Promise.all(n).then(() => {
                if (t) return t();
              });
            });
          }
          subscribe(e) {
            this._listeners.push(e);
          }
          unsubscribe(e) {
            this._listeners = this._listeners.filter(t => t !== e);
          }
        }
        exports.Container = i;
        const o = {};
        class u extends e.Component {
          constructor(...e) {
            super(...e),
              n(this, 'state', {}),
              n(this, 'instances', []),
              n(this, 'unmounted', !1),
              n(
                this,
                'onUpdate',
                () =>
                  new Promise(e => {
                    this.unmounted ? e() : this.setState(o, e);
                  })
              );
          }
          componentWillUnmount() {
            (this.unmounted = !0), this._unsubscribe();
          }
          _unsubscribe() {
            this.instances.forEach(e => {
              e.unsubscribe(this.onUpdate);
            });
          }
          _createInstances(e, t) {
            if ((this._unsubscribe(), null === e))
              throw new Error(
                'You must wrap your <Subscribe> components with a <Provider>'
              );
            let s = e,
              n = t.map(e => {
                let t;
                return (
                  'object' == typeof e && e instanceof i
                    ? (t = e)
                    : (t = s.get(e)) || ((t = new e()), s.set(e, t)),
                  t.unsubscribe(this.onUpdate),
                  t.subscribe(this.onUpdate),
                  t
                );
              });
            return (this.instances = n), n;
          }
          render() {
            return (0, e.createComponentVNode)(2, r.Consumer, {
              children: e =>
                this.props.children.apply(
                  null,
                  this._createInstances(e, this.props.to)
                )
            });
          }
        }
        function c(t) {
          return (0, e.createComponentVNode)(2, r.Consumer, {
            children: s => {
              let n = new Map(s);
              return (
                t.inject &&
                  t.inject.forEach(e => {
                    n.set(e.constructor, e);
                  }),
                (0, e.createComponentVNode)(2, r.Provider, {
                  value: n,
                  children: t.children
                })
              );
            }
          });
        }
        exports.Subscribe = u;
        let a = [];
        function l(e) {
          a.push(e);
        }
      },
      {}
    ]
  },
  {},
  ['hQC2'],
  null
);
//# sourceMappingURL=/unstated.map
