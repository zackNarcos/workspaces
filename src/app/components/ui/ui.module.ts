import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarsComponent } from './side-bars/side-bars.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterLink, RouterLinkActive} from "@angular/router";



@NgModule({
    declarations: [
        SideBarsComponent,
        NavBarComponent
    ],
  exports: [
    SideBarsComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class UiModule { }
