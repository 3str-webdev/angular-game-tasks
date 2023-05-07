import { Component, Input } from '@angular/core';
import { TaskLevel } from '@shared/types/tasksTypes';

@Component({
  selector: 'app-task-info-header',
  templateUrl: './task-info-header.component.html',
  styleUrls: ['./task-info-header.component.less'],
})
export class TaskInfoHeaderComponent {
  @Input() public taskTitle!: string;
  @Input() public taskLevel!: TaskLevel;
  @Input() public taskTheme!: string;
  @Input() public taskRating!: string;
  @Input() public taskTime!: string;
}
