import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { MaterialsModule } from '../materials.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    MaterialsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
})
export class SharedModule { }
