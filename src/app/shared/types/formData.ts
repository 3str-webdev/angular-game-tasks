import {ITask} from "@shared/types/tasksTypes";

export interface IFormData<T> {
  password: string;
  data: T
}

export type TaskFormData = Omit<ITask, 'taskId'>
export type TaskRequestData = IFormData<TaskFormData>
