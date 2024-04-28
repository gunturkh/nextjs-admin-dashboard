import { Todo } from "@/types/todo";

export type TodoQueryResponse = Array<Todo>;
export type TodoReq = {
    id: number,
    userId: number,
    title: string,
    completed: boolean
};