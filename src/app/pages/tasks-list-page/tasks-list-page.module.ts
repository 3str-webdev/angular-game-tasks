import { TaskInfoViewModule } from './../../shared/modules/task-info-view/task-info-view.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {
  TuiAlertModule,
  TuiLinkModule,
  TuiLoaderModule,
  tuiLoaderOptionsProvider,
} from '@taiga-ui/core';
import { TitledSectionModule } from '@shared/modules/titled-section/titled-section.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListPageComponent } from './tasks-list-page.component';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';
import { HttpClientModule } from '@angular/common/http';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TasksTableComponent } from './components/tasks-table/tasks-table.component';
import { PageInfoComponent } from './components/page-info/page-info.component';
import { ErrorMessageModule } from '@shared/modules/error-message/error-message.module';

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
    TuiLoaderModule,
    TuiAlertModule,
    ErrorMessageModule,
  ],
  declarations: [
    TasksListPageComponent,
    TasksTableComponent,
    PageInfoComponent,
  ],
  providers: [
    tuiLoaderOptionsProvider({
      size: 'l',
      overlay: true,
    }),
  ],
})
export class TasksListPageModule {}
