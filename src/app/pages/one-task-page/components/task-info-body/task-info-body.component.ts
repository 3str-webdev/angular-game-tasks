import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-info-body',
  templateUrl: './task-info-body.component.html',
  styleUrls: ['./task-info-body.component.less'],
})
export class TaskInfoBodyComponent {
  @Input() public taskText!: string;
  @Input() public taskAnswer!: string;

  public isShowAnswer: boolean = false;

  public toggleAnswer() {
    this.isShowAnswer = !this.isShowAnswer;
  }

  public get textAnswerToggleButton(): string {
    return `${this.isShowAnswer ? 'Скрыть' : 'Показать'} ответ`;
  }
}
