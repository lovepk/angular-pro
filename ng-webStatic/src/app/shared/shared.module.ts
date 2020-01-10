import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { MaterialsModule } from '../materials.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    MaterialsModule,
    FlexLayoutModule
  ],
})
export class SharedModule { }
