import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginGuard} from "./core/guards/login.guard";
import {UsersLayoutComponent} from "./layout/users-layout/users-layout.component";
import {AccueilComponent} from "./pages/accueil/accueil.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/users-layout/users-layout.module').then(m => m.UsersLayoutModule)
  },
  {
    path: 'admin',
    canActivate: [LoginGuard],
    loadChildren: () => import('./layout/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
