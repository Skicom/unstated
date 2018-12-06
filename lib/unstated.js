'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var inferno = require('inferno');
var PropTypes = _interopDefault(require('prop-types'));

var _typeof =
  typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
    ? function(obj) {
        return typeof obj;
      }
    : function(obj) {
        return obj &&
          typeof Symbol === 'function' &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? 'symbol'
          : typeof obj;
      };

function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function _createClass(e, t, n) {
  return (
    t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
  );
}
function _defineProperty(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
function _inherits(e, t) {
  if ('function' != typeof t && null !== t)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 }
  })),
    t && _setPrototypeOf(e, t);
}
function _getPrototypeOf(e) {
  return (_getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function _setPrototypeOf(e, t) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function(e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function _possibleConstructorReturn(e, t) {
  return !t ||
    ('object' != (typeof t === 'undefined' ? 'undefined' : _typeof(t)) &&
      'function' != typeof t)
    ? _assertThisInitialized(e)
    : t;
}
var commonjsGlobal =
  'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self
    ? self
    : {};
var key = '__global_unique_id__';
var gud = function gud() {
  return (commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1);
};
var MAX_SIGNED_31_BIT_INT = 1073741823;
function objectIs(e, t) {
  return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
}
function createEventEmitter(e) {
  var t = [];
  return {
    on: function on(e) {
      t.push(e);
    },
    off: function off(e) {
      t = t.filter(function(t) {
        return t !== e;
      });
    },
    get: function get() {
      return e;
    },
    set: function set(n, r) {
      (e = n),
        t.forEach(function(t) {
          return t(e, r);
        });
    }
  };
}
function onlyChild(e) {
  return Array.isArray(e) ? e[0] : e;
}
function createInfernoContext(e, t) {
  var n = '__create-inferno-context-' + gud() + '__',
    r = (function(e) {
      function r() {
        var e, t;
        _classCallCheck(this, r);
        for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) {
          o[i] = arguments[i];
        }
        return (
          _defineProperty(
            _assertThisInitialized(
              _assertThisInitialized(
                (t = _possibleConstructorReturn(
                  this,
                  (e = _getPrototypeOf(r)).call.apply(e, [this].concat(o))
                ))
              )
            ),
            'emitter',
            createEventEmitter(t.props.value)
          ),
          t
        );
      }
      return (
        _inherits(r, inferno.Component),
        _createClass(r, [
          {
            key: 'getChildContext',
            value: function value() {
              return _defineProperty({}, n, this.emitter);
            }
          },
          {
            key: 'componentWillReceiveProps',
            value: function value(e) {
              if (this.props.value !== e.value) {
                var n,
                  r = this.props.value,
                  o = e.value;
                objectIs(r, o)
                  ? (n = 0)
                  : ((n =
                      'function' == typeof t ? t(r, o) : MAX_SIGNED_31_BIT_INT),
                    0 !== (n |= 0) && this.emitter.set(e.value, n));
              }
            }
          },
          {
            key: 'render',
            value: function value() {
              return this.props.children;
            }
          }
        ]),
        r
      );
    })();
  _defineProperty(
    r,
    'childContextTypes',
    _defineProperty({}, n, PropTypes.object.isRequired)
  );
  var o = (function(t) {
    function r() {
      var e, t;
      _classCallCheck(this, r);
      for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) {
        o[i] = arguments[i];
      }
      return (
        _defineProperty(
          _assertThisInitialized(
            _assertThisInitialized(
              (t = _possibleConstructorReturn(
                this,
                (e = _getPrototypeOf(r)).call.apply(e, [this].concat(o))
              ))
            )
          ),
          'observedBits',
          void 0
        ),
        _defineProperty(
          _assertThisInitialized(_assertThisInitialized(t)),
          'state',
          { value: t.getValue() }
        ),
        _defineProperty(
          _assertThisInitialized(_assertThisInitialized(t)),
          'onUpdate',
          function(e, n) {
            0 != ((0 | t.observedBits) & n) &&
              t.setState({ value: t.getValue() });
          }
        ),
        t
      );
    }
    return (
      _inherits(r, inferno.Component),
      _createClass(r, [
        {
          key: 'componentWillReceiveProps',
          value: function value(e) {
            var t = e.observedBits;
            this.observedBits = null == t ? MAX_SIGNED_31_BIT_INT : t;
          }
        },
        {
          key: 'componentDidMount',
          value: function value() {
            this.context[n] && this.context[n].on(this.onUpdate);
            var e = this.props.observedBits;
            this.observedBits = null == e ? MAX_SIGNED_31_BIT_INT : e;
          }
        },
        {
          key: 'componentWillUnmount',
          value: function value() {
            this.context[n] && this.context[n].off(this.onUpdate);
          }
        },
        {
          key: 'getValue',
          value: function value() {
            return this.context[n] ? this.context[n].get() : e;
          }
        },
        {
          key: 'render',
          value: function value() {
            return onlyChild(this.props.children)(this.state.value);
          }
        }
      ]),
      r
    );
  })();
  return (
    _defineProperty(
      o,
      'contextTypes',
      _defineProperty({}, n, PropTypes.object)
    ),
    { Provider: r, Consumer: o }
  );
}

var _typeof$1 =
  typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
    ? function(obj) {
        return typeof obj;
      }
    : function(obj) {
        return obj &&
          typeof Symbol === 'function' &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? 'symbol'
          : typeof obj;
      };

function _possibleConstructorReturn$1(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var StateContext = createInfernoContext(null);

var Container = (function() {
  function Container() {
    var _this = this;

    _classCallCheck$1(this, Container);

    this._listeners = [];

    CONTAINER_DEBUG_CALLBACKS.forEach(function(cb) {
      return cb(_this);
    });
  }

  Container.prototype.setState = function setState(updater, callback) {
    var _this2 = this;

    return Promise.resolve().then(function() {
      var nextState = void 0;

      if (typeof updater === 'function') {
        nextState = updater(_this2.state);
      } else {
        nextState = updater;
      }

      if (nextState == null) {
        if (callback) callback();
        return;
      }

      _this2.state = Object.assign({}, _this2.state, nextState);

      var promises = _this2._listeners.map(function(listener) {
        return listener();
      });

      return Promise.all(promises).then(function() {
        if (callback) {
          return callback();
        }
      });
    });
  };

  Container.prototype.subscribe = function subscribe(fn) {
    this._listeners.push(fn);
  };

  Container.prototype.unsubscribe = function unsubscribe(fn) {
    this._listeners = this._listeners.filter(function(f) {
      return f !== fn;
    });
  };

  return Container;
})();

var DUMMY_STATE = {};

var Subscribe = (function(_Component) {
  _inherits$1(Subscribe, _Component);

  function Subscribe() {
    var _temp, _this3, _ret;

    _classCallCheck$1(this, Subscribe);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this3 = _possibleConstructorReturn$1(
        this,
        _Component.call.apply(_Component, [this].concat(args))
      )),
      _this3)),
      (_this3.state = {}),
      (_this3.instances = []),
      (_this3.unmounted = false),
      (_this3.onUpdate = function() {
        return new Promise(function(resolve) {
          if (!_this3.unmounted) {
            _this3.setState(DUMMY_STATE, resolve);
          } else {
            resolve();
          }
        });
      }),
      _temp)),
      _possibleConstructorReturn$1(_this3, _ret)
    );
  }

  Subscribe.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;
    this._unsubscribe();
  };

  Subscribe.prototype._unsubscribe = function _unsubscribe() {
    var _this4 = this;

    this.instances.forEach(function(container) {
      container.unsubscribe(_this4.onUpdate);
    });
  };

  Subscribe.prototype._createInstances = function _createInstances(
    map,
    containers
  ) {
    var _this5 = this;

    this._unsubscribe();

    if (map === null) {
      throw new Error(
        'You must wrap your <Subscribe> components with a <Provider>'
      );
    }

    var safeMap = map;
    var instances = containers.map(function(ContainerItem) {
      var instance = void 0;

      if (
        (typeof ContainerItem === 'undefined'
          ? 'undefined'
          : _typeof$1(ContainerItem)) === 'object'
      ) {
        instance = ContainerItem;
      } else {
        instance = safeMap.get(ContainerItem);

        if (!instance) {
          instance = new ContainerItem();
          safeMap.set(ContainerItem, instance);
        }
      }

      instance.unsubscribe(_this5.onUpdate);
      instance.subscribe(_this5.onUpdate);

      return instance;
    });

    this.instances = instances;
    return instances;
  };

  Subscribe.prototype.render = function render() {
    var _this6 = this;

    return inferno.createComponentVNode(2, StateContext.Consumer, {
      children: function children(map) {
        return _this6.props.children.apply(
          null,
          _this6._createInstances(map, _this6.props.to)
        );
      }
    });
  };

  return Subscribe;
})(inferno.Component);

function Provider(props) {
  return inferno.createComponentVNode(2, StateContext.Consumer, {
    children: function children(parentMap) {
      var childMap = new Map(parentMap);

      if (props.inject) {
        props.inject.forEach(function(instance) {
          childMap.set(instance.constructor, instance);
        });
      }

      return inferno.createComponentVNode(2, StateContext.Provider, {
        value: childMap,
        children: props.children
      });
    }
  });
}

var CONTAINER_DEBUG_CALLBACKS = [];

// If your name isn't Sindre, this is not for you.
// I might ruin your day suddenly if you depend on this without talking to me.
function __SUPER_SECRET_CONTAINER_DEBUG_HOOK__(callback) {
  CONTAINER_DEBUG_CALLBACKS.push(callback);
}

exports.Container = Container;
exports.Subscribe = Subscribe;
exports.Provider = Provider;
exports.__SUPER_SECRET_CONTAINER_DEBUG_HOOK__ = __SUPER_SECRET_CONTAINER_DEBUG_HOOK__;
