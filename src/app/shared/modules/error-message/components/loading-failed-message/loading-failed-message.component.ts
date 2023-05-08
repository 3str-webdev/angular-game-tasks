import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-failed-message',
  templateUrl: './loading-failed-message.component.html',
  styleUrls: ['./loading-failed-message.component.less'],
})
export class LoadingFailedMessageComponent {
  @Input() public isError!: boolean;
}
