import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {ModuleStoreService} from "../../../core/store/module-store.service";
import {map} from "rxjs";

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.scss']
})
export class RealisationsComponent{
  isGridView = true;
  $projects = this.moduleStoreService.getProjects().pipe(
    map((projects: any[]) => projects.slice(0, 6)
  ))
  isRealisation = true;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private moduleStoreService: ModuleStoreService,
    private activeRoute: ActivatedRoute
    ) {
    this.moduleStoreService.loadProjectsAnonyme()
    //check if is realisations page
    if (this.activeRoute.snapshot.routeConfig?.path === 'realisations') {
      this.isRealisation = true;
    } else {
      this.isRealisation = false;
    }
  }

  async goto(s: string) {
    await this.router.navigate([s]);
  }
}
