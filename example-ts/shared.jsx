var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { render } from 'inferno';
import { createElement } from 'inferno-create-element';
import { Provider, Subscribe, Container } from '../src/unstated';
var CounterContainer = /** @class */ (function (_super) {
    __extends(CounterContainer, _super);
    function CounterContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { count: 0 };
        return _this;
    }
    CounterContainer.prototype.increment = function () {
        this.setState({ count: this.state.count + 1 });
    };
    CounterContainer.prototype.decrement = function () {
        this.setState({ count: this.state.count - 1 });
    };
    return CounterContainer;
}(Container));
var sharedCounterContainer = new CounterContainer();
var stores = [sharedCounterContainer];
function Counter() {
    return createElement(Subscribe, { to: stores }, function (counter) { return (<div>
        <button onClick={function () { return counter.decrement(); }}>-</button>
        <span>{counter.state.count}</span>
        <button onClick={function () { return sharedCounterContainer.increment(); }}>+</button>
      </div>); });
}
function CounterLong() {
    return (<Subscribe to={stores}>
      {function (counter) { return (<div>
          <button onClick={function () { return counter.decrement(); }}>-</button>
          <span>{counter.state.count}</span>
          <button onClick={function () { return sharedCounterContainer.increment(); }}>+</button>
        </div>); }}
    </Subscribe>);
}
render(<Provider>
    <Counter />
  </Provider>, document.getElementById('shared'));
