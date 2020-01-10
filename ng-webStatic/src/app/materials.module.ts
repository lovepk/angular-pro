import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatMomentDateModule
  ],
})

export class MaterialsModule { }
