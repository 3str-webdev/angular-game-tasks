import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingFailedMessageComponent } from './components/loading-failed-message/loading-failed-message.component';
import { TaskNotFoundMessageComponent } from './components/task-not-found-message/task-not-found-message.component';

@NgModule({
  declarations: [LoadingFailedMessageComponent, TaskNotFoundMessageComponent],
  imports: [CommonModule],
  exports: [LoadingFailedMessageComponent, TaskNotFoundMessageComponent],
})
export class ErrorMessageModule {}
