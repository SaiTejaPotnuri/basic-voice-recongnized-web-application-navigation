import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './prime-ui/primeng/primeng.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [PrimengModule]
})
export class SharedModule { }
