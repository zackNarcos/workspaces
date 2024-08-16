import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarsComponent } from './side-bars/side-bars.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import { FrontNavBarComponent } from './front-nav-bar/front-nav-bar.component';
import { FrontFooterComponent } from './front-footer/front-footer.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownItemComponent } from './dropdown/dropdown-item/dropdown-item.component';



@NgModule({
    declarations: [
        SideBarsComponent,
        NavBarComponent,
        FrontNavBarComponent,
        FrontFooterComponent,
        DropdownComponent,
        DropdownItemComponent
    ],
  exports: [
    SideBarsComponent,
    NavBarComponent,
    FrontFooterComponent,
    FrontNavBarComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
        ReactiveFormsModule
    ]
})
export class UiModule { }
