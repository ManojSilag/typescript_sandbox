import * as React from "react";

export interface AppProps {
  color?: string;
}

const App: React.FunctionComponent<AppProps> = (props): JSX.Element => {
  return <div>Hi there!{props.color}</div>;
};

export default App;
