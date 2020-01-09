import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme/theme.component';
import { MaterialsModule } from '../materials.module';

@NgModule({
  declarations: [ThemeComponent],
  imports: [
    CommonModule,
    MaterialsModule,
  ]
})
export class TestModule { }
