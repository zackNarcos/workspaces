import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RealisationsComponent} from "./realisations/realisations.component";
import {BlocksModule} from "../../components/blocks/blocks.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {FrontFormationsComponent} from "./front-formations/front-formations.component";
import {FrontSkillsComponent} from "./front-skills/front-skills.component";
@NgModule({
  declarations: [
    FrontFormationsComponent,
    FrontSkillsComponent

  ],
  exports: [
    FrontFormationsComponent,
    FrontSkillsComponent
  ],
  imports: [
    CommonModule,
    BlocksModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
  ]
})
export class AccueilModule { }
