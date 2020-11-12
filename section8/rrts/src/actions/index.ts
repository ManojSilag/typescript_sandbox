import axios, { AxiosPromise, AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface fetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => async (dispatch: Dispatch) => {
  const response = await axios.get<Todo[]>(url);

  dispatch<fetchTodosAction>({
    type: ActionTypes.fetchTodos,
    payload: response.data
  });
};
