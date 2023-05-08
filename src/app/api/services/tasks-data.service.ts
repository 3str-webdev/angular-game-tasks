import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestParams } from '@api/types/requests';
import { Store } from '@ngrx/store';
import { ITask } from '@shared/types/tasksTypes';
import { getAllTasks, getOneTask } from '@store/tasksStore/tasks.actions';
import { Observable, retry } from 'rxjs';
import { getAllUrl, getById } from './../url';

@Injectable({
  providedIn: 'root',
})
export class TasksDataService {
  public tasksList$: Observable<ITask[]>;

  constructor(
    private http: HttpClient,
    public tasksListStore: Store<{ tasksList: ITask[] }>
  ) {
    this.tasksList$ = tasksListStore.select('tasksList');
  }

  public findTaskById(tasks: ITask[], taskId: number): ITask | undefined {
    return tasks.find((task) => +task.taskId === taskId);
  }

  public getAll(params: RequestParams<ITask[]> = {}): void {
    if (params.onStart) params.onStart();

    this.http
      .get<ITask[]>(getAllUrl)
      .pipe(retry(2))
      .subscribe({
        next: (tasks) => {
          this.tasksListStore.dispatch(getAllTasks({ tasksList: tasks }));
          if (params.onFinish) params.onFinish(tasks);
        },
        error: params.onError,
      });
  }

  public getTaskById(taskId: number, params: RequestParams<ITask> = {}): void {
    if (params.onStart) params.onStart();

    let result: ITask | undefined = undefined;
    this.tasksList$.subscribe((tasks) => {
      result = this.findTaskById(tasks, taskId);
    });

    if (result) {
      if (params.onFinish) params.onFinish(result);
      return;
    }

    this.http
      .get<ITask>(getById + taskId, {
        params: {
          taskId,
        },
      })
      .pipe(retry(2))
      .subscribe({
        next: (task) => {
          this.tasksListStore.dispatch(getOneTask({ task }));
          if (params.onFinish) params.onFinish(task);
        },
        error: params.onError,
      });
  }
}
