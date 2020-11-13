import axios, { AxiosPromise, AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";
const url = "https://jsonplaceholder.typicode.com/todos";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface fetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface deleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export const fetchTodos = () => async (dispatch: Dispatch) => {
  const response = await axios.get<Todo[]>(url);

  dispatch<fetchTodosAction>({
    type: ActionTypes.fetchTodos,
    payload: response.data
  });
};

export const deleteTodo = (id: number): deleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  };
};
