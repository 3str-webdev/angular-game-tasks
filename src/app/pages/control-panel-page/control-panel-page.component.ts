import { ITask } from '@shared/types/tasksTypes';
import { TasksDataService } from '@api/services/tasks-data.service';
import { Component, Inject, OnInit } from '@angular/core';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-control-panel-page',
  templateUrl: './control-panel-page.component.html',
  styleUrls: ['./control-panel-page.component.less'],
})
export class ControlPanelPageComponent implements OnInit {
  public readonly columns: (keyof ITask | string)[] = [
    'title',
    'theme',
    'level',
    'actions',
  ];
  public readonly columnsHeaders: string[] = [
    'Название задачи',
    'Тема',
    'Сложность',
    'Действия',
  ];

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    public tasksDataService: TasksDataService
  ) {}

  ngOnInit(): void {
    this.tasksDataService.getAll();
  }

  showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
    this.dialogService.open(content).subscribe();
  }
}
