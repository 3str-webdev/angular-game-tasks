import { TuiLinkModule, TuiButtonModule } from '@taiga-ui/core';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TaskInfoViewModule } from './../../shared/modules/task-info-view/task-info-view.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TitledSectionModule } from '@shared/modules/titled-section/titled-section.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelPageComponent } from './control-panel-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiDialogModule } from '@taiga-ui/core';

@NgModule({
  imports: [
    CommonModule,
    TitledSectionModule,
    TuiTableModule,
    TuiLetModule,
    TuiLinkModule,
    TuiButtonModule,
    TuiDialogModule,
    TaskInfoViewModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [ControlPanelPageComponent],
})
export class ControlPanelPageModule {}
