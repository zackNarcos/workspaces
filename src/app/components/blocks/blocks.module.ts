import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {BlockProjectComponent} from "./block-project/block-project.component";
import { SmallBlockProjectComponent } from './small-block-project/small-block-project.component';
import {BlockProjectMdComponent} from "./block-project-md/block-project-md.component";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    BlockProjectComponent,
    BlockProjectMdComponent,
    SmallBlockProjectComponent
  ],
  exports: [
    BlockProjectComponent,
    BlockProjectMdComponent,
    SmallBlockProjectComponent
  ],
    imports: [
        CommonModule,
        NgOptimizedImage,
        RouterLink
    ]
})
export class BlocksModule { }
