import { TitledSectionModule } from '@shared/modules/titled-section/titled-section.module';
import { AppRoutingModule } from './../app-routing.module';
import { ContentComponent } from './components/content/content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';

import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';

import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiActiveZoneModule } from '@taiga-ui/cdk/directives';
import { TuiTooltipModule } from '@taiga-ui/core';

@NgModule({
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiSidebarModule,
    TuiActiveZoneModule,
    TuiLinkModule,
    TuiTooltipModule,
    TitledSectionModule,
    AppRoutingModule,
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
