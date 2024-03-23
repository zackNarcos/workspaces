import { Component } from '@angular/core';
import {CreateComponent} from "./create/create.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {ModuleStoreService} from "../../core/store/module-store.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  isGridView = true;
  $projects = this.moduleStoreService.getProjects();

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private moduleStoreService: ModuleStoreService
    ) {}
  openCreateModal() {
    this.dialog.open(CreateComponent, {
      height: '400px',
      width: '600px',
    });
  }

  async goto(s: string) {
    await this.router.navigate([s]);
  }
}
