import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingFailedMessageComponent } from './components/loading-failed-message/loading-failed-message.component';

@NgModule({
  declarations: [LoadingFailedMessageComponent],
  imports: [CommonModule],
  exports: [LoadingFailedMessageComponent],
})
export class ErrorMessageModule {}
