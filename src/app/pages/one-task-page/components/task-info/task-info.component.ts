import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskLevel } from '@shared/types/tasksTypes';
import { TasksDataService } from '@api/services/tasks-data.service';
import { ITask } from '@shared/types/tasksTypes';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.less'],
})
export class TaskInfoComponent {
  private taskId!: number;
  private task: ITask | undefined = undefined;
  public isLoading: boolean = false;
  public isError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private readonly tasksDataService: TasksDataService
  ) {
    this.taskId = +this.route.snapshot.params['taskId'];

    this.tasksDataService.getTaskById(this.taskId, {
      onStart: () => (this.isLoading = true),
      onFinish: (task) => {
        this.task = task;
        console.log(task);

        this.isLoading = false;
      },
      onError: () => {
        this.isError = true;
      },
    });
  }

  public get isTaskFound(): boolean {
    return !this.isLoading && !!this.task;
  }

  public get taskTitle(): string {
    return this.task?.title ?? '';
  }

  public get taskTheme(): string {
    return this.task?.theme ?? '';
  }

  public get taskRating(): string {
    return `${this.task?.rating}/10` ?? '';
  }

  public get taskText(): string {
    return this.task?.text ?? '';
  }

  public get taskAnswer(): string {
    return this.task?.answer ?? '';
  }

  public get taskTime(): string {
    return this.task?.createdAt ?? '';
  }

  public get taskLevel(): TaskLevel {
    return this.task?.level ?? 'Easy';
  }
}
