import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsComponent} from "./projects.component";
import {RouterModule, Routes} from "@angular/router";
import {BlocksModule} from "../../components/blocks/blocks.module";

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  }
];

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BlocksModule,
  ]
})
export class ProjectsModule { }
