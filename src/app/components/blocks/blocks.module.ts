import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlockProjectComponent} from "./block-project/block-project.component";
import { SmallBlockProjectComponent } from './small-block-project/small-block-project.component';



@NgModule({
  declarations: [
    BlockProjectComponent,
    SmallBlockProjectComponent
  ],
  exports: [
    BlockProjectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlocksModule { }
