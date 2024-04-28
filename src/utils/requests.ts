import axios, { AxiosResponse } from "axios";
import { TodoQueryResponse, TodoReq } from "./models";
import { TODOS_URL } from "./constants";

export const getTodos = (): Promise<TodoQueryResponse> => {
    return axios
        .get(`${TODOS_URL}`)
        .then((d: AxiosResponse<TodoQueryResponse>) => {
            console.log('getTodos response', d)
            return d.data
        });
};
export const postTodo = (
    todo: Omit<TodoReq, 'id'>
): Promise<TodoReq | undefined> => {
    return axios
        .post(`${TODOS_URL}`, todo)
        .then((response: AxiosResponse<TodoReq>) => {
            console.log('postTodo response', response)
            return response.data
        }
        )
    // .then((response: TodoReq) => response.data);
};
export const putTodo = (
    todo: TodoReq
): Promise<TodoReq | undefined> => {
    return axios
        .put(`${TODOS_URL}/${todo.id}`, todo)
        .then((response: AxiosResponse<TodoReq>) => {
            console.log('putTodo response', response)
            return response.data
        }
        )
    // .then((response: TodoReq) => response.data);
};

export const deleteTodo = (id: number): Promise<TodoReq | undefined> => {
    return axios
        .delete(`${TODOS_URL}/${id}`)
        .then((response: AxiosResponse<TodoReq>) => {
            console.log('deleteTodo response', response)
            return response.data
        }
        )
    // .then((response: TodoReq) => response.data);
};