import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskLevelDropdownComponent} from './components/task-level-dropdown/task-level-dropdown.component';
import {TuiDataListModule, TuiHostedDropdownModule} from "@taiga-ui/core";


@NgModule({
  declarations: [
    TaskLevelDropdownComponent
  ],
  imports: [
    CommonModule,
    TuiDataListModule,
    TuiHostedDropdownModule
  ]
})
export class TaskLevelDropdownModule {
}
