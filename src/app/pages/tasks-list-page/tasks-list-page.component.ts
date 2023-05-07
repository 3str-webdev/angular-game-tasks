import { Component } from '@angular/core';
import { TasksDataService } from '@api/services/tasks-data.service';

@Component({
  selector: 'app-tasks-list-page',
  templateUrl: './tasks-list-page.component.html',
  styleUrls: ['./tasks-list-page.component.less'],
})
export class TasksListPageComponent {
  constructor(public tasksDataService: TasksDataService) {}
}
