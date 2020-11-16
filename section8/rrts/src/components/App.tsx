import * as React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { storeState } from "../reducers";

export interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

const _App: React.FunctionComponent<AppProps> = (props): JSX.Element => {
  React.useEffect(() => {}, []);

  const [loading, SetLoading] = React.useState(false);

  const onButtonClick = (): void => {
    SetLoading(true);
    props.fetchTodos();
  };

  const renderList = (): JSX.Element[] => {
    return props.todos.map((t) => {
      return (
        <div onClick={() => onTodoClick(t.id)} key={t.id}>
          {t.title}
        </div>
      );
    });
  };

  const onTodoClick = (id: number): void => {
    props.deleteTodo(id);
  };

  return (
    <div>
      <button onClick={onButtonClick}>Fetch</button>
      {loading && props.todos.length <= 0 && <h3>Loading......</h3>}
      {renderList()}
    </div>
  );
};

const mapStateToProps = ({ todos }: storeState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, {
  fetchTodos,
  deleteTodo
})(_App);
