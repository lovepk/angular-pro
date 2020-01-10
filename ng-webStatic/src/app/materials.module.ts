import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
  ],
})

export class MaterialsModule { }
