import React from "react";
import RectDom from "react-dom";

interface AppProps {
  color?: string;
}

interface AppState {
    counter: number;
}


class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { counter: 0 };
  }

  OnIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  OnDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.OnIncrement}>Increment</button>
        <button onClick={this.OnDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

RectDom.render(<App />, document.querySelector("#root"));
