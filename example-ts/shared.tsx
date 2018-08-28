import { render, VNode } from 'inferno';
import { createElement } from 'inferno-create-element';
import { Provider, Subscribe, Container } from '../src/unstated';

type CounterState = {
  count: number;
};

class CounterContainer extends Container<CounterState> {
  state = { count: 0 };

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
}

const sharedCounterContainer = new CounterContainer();
const stores: Container<any>[] = [sharedCounterContainer];

function Counter() {
  return createElement(
    Subscribe,
    { to: stores },
    (counter: CounterContainer): VNode => (
      <div>
        <button onClick={() => counter.decrement()}>-</button>
        <span>{counter.state.count}</span>
        <button onClick={() => sharedCounterContainer.increment()}>+</button>
      </div>
    )
  );
}

render(
  <Provider>
    <Counter />
  </Provider>,
  document.getElementById('shared')
);
