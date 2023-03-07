import { ITask } from './../../shared/types/tasksTypes';
import { createAction, props } from '@ngrx/store';

export const getAllTasks = createAction(
  '[Tasks] Get all tasks',
  props<{ tasksList: ITask[] }>()
);

export const getOneTask = createAction(
  '[Tasks] Get one task',
  props<{ task: ITask }>()
);
