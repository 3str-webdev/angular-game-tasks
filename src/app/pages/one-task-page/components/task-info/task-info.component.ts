import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITask, TaskLevel } from '@shared/types/tasksTypes';
import { TasksDataService } from './../../../../api/services/tasks-data.service';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.less'],
})
export class TaskInfoComponent {
  private taskId!: number;
  private task!: ITask | undefined;
  public isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private readonly tasksDataService: TasksDataService
  ) {
    this.taskId = +this.route.snapshot.params['taskId'];

    this.tasksDataService.getTaskById(this.taskId, {
      onStart: () => (this.isLoading = true),
      onFinish: () => (this.isLoading = false),
    });

    this.tasksDataService.tasksList$.subscribe((tasks) => {
      this.task = this.tasksDataService.findTaskById(tasks, this.taskId);
    });
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
