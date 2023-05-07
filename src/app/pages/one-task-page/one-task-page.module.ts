import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';
import { TitledSectionModule } from '@shared/modules/titled-section/titled-section.module';
import { TuiEditorSocketModule } from '@taiga-ui/addon-editor';
import { TuiEditorModule } from '@taiga-ui/addon-editor';
import { TuiButtonModule, TuiExpandModule } from '@taiga-ui/core';
import { TaskInfoViewModule } from './../../shared/modules/task-info-view/task-info-view.module';
import { TaskInfoComponent } from './components/task-info/task-info.component';
import { TasksNavigationComponent } from './components/tasks-navigation/tasks-navigation.component';
import { OneTaskPageComponent } from './one-task-page.component';
import { TaskInfoHeaderComponent } from './components/task-info-header/task-info-header.component';
import { TaskInfoBodyComponent } from './components/task-info-body/task-info-body.component';

@NgModule({
  imports: [
    CommonModule,
    TitledSectionModule,
    SharedDirectivesModule,
    TuiExpandModule,
    TuiButtonModule,
    RouterModule,
    TaskInfoViewModule,
    TuiEditorModule,
    TuiEditorSocketModule,
  ],
  declarations: [
    OneTaskPageComponent,
    TasksNavigationComponent,
    TaskInfoComponent,
    TaskInfoHeaderComponent,
    TaskInfoBodyComponent,
  ],
})
export class OneTaskPageModule {}
