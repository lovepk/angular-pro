import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialsModule } from '../materials.module';

@NgModule({
  imports: [CommonModule, MaterialsModule],
  exports: [LoginComponent],
  declarations: [LoginComponent]
})

export class AuthorityModule { }