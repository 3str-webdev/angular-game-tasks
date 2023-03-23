import {TaskLevel} from '@shared/types/tasksTypes';
import {Component, Input} from '@angular/core';
import {TuiStatus} from '@taiga-ui/kit';
import {TuiSizeL} from '@taiga-ui/core';

@Component({
  selector: 'app-task-level-badge',
  templateUrl: './task-level-badge.component.html',
  styleUrls: ['./task-level-badge.component.less'],
})
export class TaskLevelBadgeComponent {
  @Input() public level!: TaskLevel;
  @Input() public size!: TuiSizeL;

  private statusDict: Record<TaskLevel, TuiStatus> = {
    Easy: 'success',
    Medium: 'warning',
    Hard: 'error',
  };

  constructor() {
  }

  public get badgeStatus(): TuiStatus {
    return this.statusDict[this.level];
  }
}
