import { Provider, Subscribe, Container } from '../src/unstated';

class CounterContainer extends Container<{ count: number }> {
  state = { count: 0 };
  increment(amount = 1) {
    this.setState({ count: this.state.count + amount });
  }
  decrement(amount = 1) {
    this.setState({ count: this.state.count - amount });
  }
}

class AmounterContainer extends Container<{ amount: number }> {
  state = { amount: 1 };
  setAmount(amount: number) {
    this.setState({ amount });
  }
}

function Counter() {
  return (
    <Subscribe to={[CounterContainer]}>
      {(counter: CounterContainer) => (
        <div>
          <span>{counter.state.count}</span>
          <button onClick={() => counter.decrement()}>-</button>
          <button onClick={() => counter.increment()}>+</button>
        </div>
      )}
    </Subscribe>
  );
}

const sharedAmountContainer = new AmounterContainer();

let counter = new CounterContainer();
let render = () => (
  <Provider inject={[counter]}>
    <Counter />
  </Provider>
);
