import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './prime-ui/primeng/primeng.module';
import { DialogService } from 'primeng/dynamicdialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [PrimengModule],
  providers: [DialogService],

})
export class SharedModule { }
