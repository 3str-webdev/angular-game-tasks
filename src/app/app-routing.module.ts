import { ControlPanelPageComponent } from './pages/control-panel-page/control-panel-page.component';
import { OneTaskPageComponent } from './pages/one-task-page/one-task-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TasksListPageComponent } from './pages/tasks-list-page/tasks-list-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Главная' },
  {
    path: 'tasks',
    component: TasksListPageComponent,
    title: 'Задачи',
    pathMatch: 'full',
  },
  {
    path: 'tasks/:taskId',
    component: OneTaskPageComponent,
    title: 'Задача',
  },
  {
    path: 'control',
    component: ControlPanelPageComponent,
    title: 'Панель управления',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
