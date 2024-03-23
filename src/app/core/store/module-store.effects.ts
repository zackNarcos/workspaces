import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ModuleStoreService} from "./module-store.service";
import {ModuleActions, ModuleStoreActionsTypes} from "./module-store.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {take} from "rxjs/operators";
import {UserService} from "../services/user.service";
import {ProjectService} from "../services/project.service";
import {Router} from "@angular/router";

@Injectable()
export class ModuleStoreEffects {

  constructor(
    private actions$: Actions,
    private moduleStoreService: ModuleStoreService,
    private userService: UserService,
    private projectService: ProjectService,
    private router: Router
  ) {
  }

  loadProject$ = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.loadProject),
    switchMap(() => this.projectService.getProjects()
      .pipe(
        map((projects: any) => {
          return ModuleActions.loadProjectSuccess({projects: projects})
        }),
        catchError((err) => {
          return of(ModuleActions.loadProjectFailure({error: err}))
        })
      )
    )
  ));

  loadProjectAnonyme$ = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.loadProjectAnonyme),
    switchMap(() => this.projectService.getProjectsAnonyme()
      .pipe(
        map((projects: any) => {
          return ModuleActions.loadProjectSuccess({projects: projects})
        }),
        catchError((err) => {
          return of(ModuleActions.loadProjectFailure({error: err}))
        })
      )
    )
  ));

  addProject$ = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.addProject),
    switchMap((action) => this.projectService.postProject(action.project)
      .pipe(
        map((data: any) => {
          this.moduleStoreService.getProjects().pipe(take(1)).subscribe((projects) => {
            projects.push(data.project)
          })
          return ModuleActions.addProjectSuccess({project: data.project})
        }),
        catchError((err) => {
          return of(ModuleActions.addProjectFailure({error: err}))
        })
      )
    )
  ));

  updateProject$ = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.updateProject),
    switchMap((action) => this.projectService.putProject(action.project)
      .pipe(
        map((project: any) => {
          this.moduleStoreService.getProjects().pipe(take(1)).subscribe((projects) => {
            const index = projects.findIndex((pay) => pay.id === project.id)
            projects[index] = project
          })
          return ModuleActions.updateProjectSuccess({project: project})
        }),
        catchError((err) => {
          return of(ModuleActions.updateProjectFailure({error: err}))
        })
      )
    )
  ));

  $getUser = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.getUser),
    switchMap((action) => this.userService.getMe()
      .pipe(
        map((user: any) => {
          return ModuleActions.getUserSuccess({user: user})
        }),
        catchError((err) => {
          return of(ModuleActions.getUserFailure({error: err}))
        })
      )
    )
  ));

}
