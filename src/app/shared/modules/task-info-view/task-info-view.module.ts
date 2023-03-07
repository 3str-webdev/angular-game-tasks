import { TuiBadgeModule } from '@taiga-ui/kit';
import { TaskLevelBadgeComponent } from './components/task-level-bage/task-level-badge.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, TuiBadgeModule],
  declarations: [TaskLevelBadgeComponent],
  exports: [TaskLevelBadgeComponent],
})
export class TaskInfoViewModule {}
