import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsComponent} from "./projects.component";
import {RouterModule, Routes} from "@angular/router";
import {BlocksModule} from "../../components/blocks/blocks.module";
import { CreateComponent } from './create/create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  }
];

@NgModule({
  declarations: [
    ProjectsComponent,
    CreateComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        BlocksModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class ProjectsModule { }
