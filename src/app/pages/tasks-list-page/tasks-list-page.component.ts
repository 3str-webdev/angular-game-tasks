import { ITask } from './../../shared/types/tasksTypes';
import { TasksDataService } from '@api/services/tasks-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-list-page',
  templateUrl: './tasks-list-page.component.html',
  styleUrls: ['./tasks-list-page.component.less'],
})
export class TasksListPageComponent implements OnInit {
  public readonly columns: (keyof ITask)[] = ['title', 'theme', 'level'];
  public readonly columnsHeaders: string[] = [
    'Название задачи',
    'Тема',
    'Сложность',
  ];

  constructor(public tasksDataService: TasksDataService) {}

  ngOnInit(): void {
    this.tasksDataService.getAll();
  }
}
