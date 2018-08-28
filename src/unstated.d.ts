import * as Inferno from 'inferno';

export class Container<State extends object> {
  state: State;
  setState<K extends keyof State>(
    state:
      | ((prevState: Readonly<State>) => Partial<State> | State | null)
      | (Partial<State> | State | null),
    callback?: () => void
  ): Promise<void>;
  subscribe(fn: () => any): void;
  unsubscribe(fn: () => any): void;
}

export interface ContainerType<State extends object> {
  new (...args: any[]): Container<State>;
}

interface SubscribeProps {
  to: (ContainerType<any> | Container<any>)[];
  children(...instances: Container<any>[]): any;
}

export class Subscribe extends Inferno.Component<SubscribeProps, any> {}

export interface ProviderProps {
  inject?: Container<any>[];
  children: Inferno.InfernoChildren;
}

export const Provider: Inferno.SFC<ProviderProps>;
