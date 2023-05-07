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
  public isLoading: boolean = false;

  constructor(private readonly tasksDataService: TasksDataService) {
    this.tasksDataService.getAll({
      onStart: () => (this.isLoading = true),
      onFinish: () => (this.isLoading = false),
    });
    this.tasksList$ = this.tasksDataService.tasksList$;
  }
}
