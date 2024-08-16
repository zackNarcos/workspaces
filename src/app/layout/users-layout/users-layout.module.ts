import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersLayoutComponent} from "./users-layout.component";
import {AccueilComponent} from "../../pages/accueil/accueil.component";
import {RouterModule} from "@angular/router";
import {RealisationsComponent} from "../../pages/accueil/realisations/realisations.component";
import {BlocksModule} from "../../components/blocks/blocks.module";
import {UiModule} from "../../components/ui/ui.module";
import {FrontRealisationsComponent} from "../../pages/front-realisations/front-realisations.component";
import {AProposComponent} from "../../pages/a-propos/a-propos.component";
import {ContactComponent} from "../../pages/contact/contact.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AccueilModule} from "../../pages/accueil/accueil.module";

const routes = [
  {
    path: '',
    component: UsersLayoutComponent,
    children: [
      {
        path: '',
        component: AccueilComponent
      },
      {
        path: 'realisations',
        component: FrontRealisationsComponent
      },
      {
        path: 'a-propos',
        component: AProposComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    UsersLayoutComponent,
    RealisationsComponent,
    AccueilComponent,
    FrontRealisationsComponent,
    AProposComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BlocksModule,
    UiModule,
    ReactiveFormsModule,
    AccueilModule,
  ]
})
export class UsersLayoutModule { }
