import { ITask } from '@shared/types/tasksTypes';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.less'],
})
export class TaskInfoComponent {
  @Input() task!: ITask;
  public isShowAnswer: boolean = false;

  constructor() {}

  public toggleAnswer() {
    this.isShowAnswer = !this.isShowAnswer;
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
    return this.task.createdAt;
  }

  public get textAnswerToggleButton(): string {
    return `${this.isShowAnswer ? 'Скрыть' : 'Показать'} ответ`;
  }
}
