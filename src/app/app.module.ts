import { ControlPanelPageModule } from './pages/control-panel-page/control-panel-page.module';
import { OneTaskPageModule } from './pages/one-task-page/one-task-page.module';
import { tasksListReducer } from './store/tasksStore/tasks.resucer';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './pages/home-page/home-page.module';
import { TasksListPageModule } from './pages/tasks-list-page/tasks-list-page.module';
import { LayoutModule } from './layout/layout.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    LayoutModule,
    HomePageModule,
    TasksListPageModule,
    OneTaskPageModule,
    ControlPanelPageModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    StoreModule.forRoot({ tasksList: tasksListReducer }),
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
