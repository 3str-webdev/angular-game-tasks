import { TitledSectionModule } from '@shared/modules/titled-section/titled-section.module';
import { ContributorsCarouselComponent } from './components/contributors-carousel/contributors-carousel.component';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { SelectDirective } from '@shared/directives/select.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TuiCarouselModule } from '@taiga-ui/kit';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    TuiButtonModule,
    AppRoutingModule,
    TuiLinkModule,
    TuiCarouselModule,
    TitledSectionModule,
    SharedDirectivesModule,
  ],
  declarations: [HomePageComponent, ContributorsCarouselComponent],
  exports: [HomePageComponent],
})
export class HomePageModule {}
