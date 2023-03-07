import { TasksDataService } from '@api/services/tasks-data.service';
import { ITask } from '@shared/types/tasksTypes';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-task-page',
  templateUrl: './one-task-page.component.html',
  styleUrls: ['./one-task-page.component.less'],
})
export class OneTaskPageComponent {
  private readonly taskId: number;
  public task: ITask | undefined;
  public isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private tasksDataService: TasksDataService
  ) {
    this.taskId = +this.route.snapshot.params['taskId'];
    this.tasksDataService.getTaskById(this.taskId);
    this.tasksDataService.tasksList$.subscribe((tasks) => {
      this.task = tasksDataService.findTaskById(tasks, this.taskId);
      this.isLoading = false;
    });
  }

  public get checkForShowContent(): boolean {
    return this.isLoading == false && this.task !== undefined;
  }

  public get checkForShowTaskNotFound(): boolean {
    return this.isLoading == false && this.task === undefined;
  }
}
