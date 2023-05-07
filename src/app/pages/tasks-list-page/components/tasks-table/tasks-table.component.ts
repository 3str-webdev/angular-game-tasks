import { Component } from '@angular/core';
import { TasksDataService } from '@api/services/tasks-data.service';
import { ITask } from '@shared/types/tasksTypes';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.less'],
})
export class TasksTableComponent {
  public readonly columns: (keyof ITask)[] = ['title', 'theme', 'level'];
  public readonly columnsHeaders: string[] = [
    'Название задачи',
    'Тема',
    'Сложность',
  ];
  public tasksList$: Observable<ITask[]>;
  constructor(private readonly tasksDataService: TasksDataService) {
    this.tasksDataService.getAll();
    this.tasksList$ = this.tasksDataService.tasksList$;
  }
}
