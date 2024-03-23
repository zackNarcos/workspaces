import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RealisationsComponent} from "./realisations/realisations.component";
import {BlocksModule} from "../../components/blocks/blocks.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
@NgModule({
  declarations: [
    // RealisationsComponent,
  ],
    imports: [
        CommonModule,
        // RouterModule.forChild(routes),
        BlocksModule,
        ReactiveFormsModule,
        FormsModule,
        RouterLink,
    ]
})
export class AccueilModule { }
