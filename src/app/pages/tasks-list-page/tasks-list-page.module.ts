import { TaskInfoViewModule } from './../../shared/modules/task-info-view/task-info-view.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TuiLinkModule } from '@taiga-ui/core';
import { TitledSectionModule } from '@shared/modules/titled-section/titled-section.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListPageComponent } from './tasks-list-page.component';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';
import { HttpClientModule } from '@angular/common/http';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiLetModule } from '@taiga-ui/cdk';

@NgModule({
  imports: [
    CommonModule,
    TitledSectionModule,
    TuiLinkModule,
    SharedDirectivesModule,
    AppRoutingModule,
    HttpClientModule,
    TuiTableModule,
    TuiLetModule,
    TaskInfoViewModule,
  ],
  declarations: [TasksListPageComponent],
})
export class TasksListPageModule {}
