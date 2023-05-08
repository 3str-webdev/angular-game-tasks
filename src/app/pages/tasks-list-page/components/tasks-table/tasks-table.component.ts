import { Component, Inject } from '@angular/core';
import { TasksDataService } from '@api/services/tasks-data.service';
import { ITask } from '@shared/types/tasksTypes';
import { TuiAlertService, TuiNotification } from '@taiga-ui/core';
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
  public isError: boolean = false;

  constructor(
    private readonly tasksDataService: TasksDataService,
    @Inject(TuiAlertService)
    @Inject(TuiAlertService)
    private readonly alerts: TuiAlertService
  ) {
    this.tasksDataService.getAll({
      onStart: () => (this.isLoading = true),
      onFinish: () => (this.isLoading = false),
      onError: () => {
        this.isError = true;
        this.showErrorMessage();
      },
    });
    this.tasksList$ = this.tasksDataService.tasksList$;
  }

  showErrorMessage() {
    this.alerts
      .open('Ошибка при получении задач', {
        label: 'Что-то пошло не так',
        status: TuiNotification.Error,
      })
      .subscribe();
  }
}
