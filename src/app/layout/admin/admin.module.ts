import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./admin.component";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../../pages/dashboard/dashboard.component";
import {UiModule} from "../../components/ui/ui.module";
import {ProjectsComponent} from "../../pages/projects/projects.component";
import {UsersComponent} from "../../pages/users/users.component";


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'projects', loadChildren: () => import('../../pages/projects/projects.module').then(m => m.ProjectsModule) },
      { path: 'skills', loadChildren: () => import('../../pages/skills/skills.module').then(m => m.SkillsModule) },
      { path: 'formations', loadChildren: () => import('../../pages/formations/formations.module').then(m => m.FormationsModule) },
      { path: 'users', component: UsersComponent },
    ]
  }
];


@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule
  ]
})
export class AdminModule { }
