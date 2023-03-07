import { getOneTask } from './../../store/tasksStore/tasks.actions';
import { getAllTasks } from '@store/tasksStore/tasks.actions';
import { Observable, retry } from 'rxjs';
import { getAllUrl, getById } from './../url';
import { ITask } from '@shared/types/tasksTypes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class TasksDataService {
  private isLoading: boolean = false;
  public tasksList$: Observable<ITask[]>;

  constructor(
    private http: HttpClient,
    public tasksListStore: Store<{ tasksList: ITask[] }>
  ) {
    this.tasksList$ = tasksListStore.select('tasksList');
  }

  public getAll(): void {
    this.http
      .get<ITask[]>(getAllUrl)
      .pipe(retry(2))
      .subscribe((tasks) =>
        this.tasksListStore.dispatch(getAllTasks({ tasksList: tasks }))
      );
  }

  public findTaskById(tasks: ITask[], taskId: number): ITask | undefined {
    return tasks.find((task) => +task.taskId === taskId);
  }

  public getTaskById(taskId: number): void {
    let result: boolean = false;
    this.tasksList$.subscribe((tasks) => {
      result = this.findTaskById(tasks, taskId) !== undefined;
    });

    if (result) return;

    this.http
      .get<ITask>(getById + taskId, {
        params: {
          taskId,
        },
      })
      .pipe(retry(2))
      .subscribe((task) => this.tasksListStore.dispatch(getOneTask({ task })));
  }
}
