import { TaskInfoViewModule } from './../../shared/modules/task-info-view/task-info-view.module';
import { TaskInfoComponent } from './components/task-info/task-info.component';
import { RouterModule } from '@angular/router';
import { TasksNavigationComponent } from './components/tasks-navigation/tasks-navigation.component';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';
import { TitledSectionModule } from '@shared/modules/titled-section/titled-section.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneTaskPageComponent } from './one-task-page.component';
import { TuiBadgeModule } from '@taiga-ui/kit';
import { TuiExpandModule, TuiButtonModule } from '@taiga-ui/core';

@NgModule({
  imports: [
    CommonModule,
    TitledSectionModule,
    SharedDirectivesModule,
    TuiExpandModule,
    TuiButtonModule,
    RouterModule,
    TaskInfoViewModule,
  ],
  declarations: [
    OneTaskPageComponent,
    TasksNavigationComponent,
    TaskInfoComponent,
  ],
})
export class OneTaskPageModule {}
