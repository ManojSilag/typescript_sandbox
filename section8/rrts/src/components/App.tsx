import * as React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { storeState } from "../reducers";

export interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

const _App: React.FunctionComponent<AppProps> = (props): JSX.Element => {
  React.useEffect(() => {
  
  }, []);

  const onButtonClick = (): void =>{
    props.fetchTodos();
  }

  const renderList = (): JSX.Element[] => {
     return props.todos.map((t) =>{
       return <div key={t.id}>{t.title}</div>
     })
  }

  return <div>
    <button onClick={onButtonClick}>Fetch</button>
    {renderList()}
    </div>;
};

const mapStateToProps = ({ todos }: storeState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, {
  fetchTodos
})(_App);
