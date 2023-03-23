import { getAllTasks, getOneTask } from './tasks.actions';
import { createReducer, on } from '@ngrx/store';
import { ITask } from '@shared/types/tasksTypes';

const initialState: ITask[] = [];

export const tasksListReducer = createReducer(
  initialState,
  on(getAllTasks, (state, { tasksList }) => [...tasksList]),
  on(getOneTask, (state, { task }) => [...state, task])
);
