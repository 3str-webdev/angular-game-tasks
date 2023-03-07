import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';
import { TitledSectionComponent } from '@shared/modules/titled-section/titled-section.component';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [SharedDirectivesModule],
  declarations: [TitledSectionComponent],
  exports: [TitledSectionComponent],
})
export class TitledSectionModule {}
