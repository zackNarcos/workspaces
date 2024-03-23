import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {moduleStoreSelectors} from "./module-store.selectors";
import {ModuleActions} from "./module-store.actions";


@Injectable({
  providedIn: 'root'
})
export class ModuleStoreService {

  constructor(
    private readonly store: Store
  ) {
    this.store = store;
  }

  addProject(project: any) { this.store.dispatch(ModuleActions.addProject({project})); }
  loadProjects() { this.store.dispatch(ModuleActions.loadProject()); }
  loadProjectsAnonyme() { this.store.dispatch(ModuleActions.loadProjectAnonyme()); }
  selectSelectedProject() { return this.store.select(moduleStoreSelectors.selectSelectedProject); }
  getProjects() { return this.store.select(moduleStoreSelectors.selectProject); }
  selectIsLoadMoreproject() { return this.store.select(moduleStoreSelectors.selectIsLoadMoreProject); }
  deleteProject(project: any) { this.store.dispatch(ModuleActions.deleteProject({project})); }
  updateProject(project: any) { this.store.dispatch(ModuleActions.updateProject({project})); }
  clear() { this.store.dispatch(ModuleActions.clear()); }
  getUser() { return this.store.select(moduleStoreSelectors.selectUser); }
  getIsLoadUser() { return this.store.select(moduleStoreSelectors.selectIsLoadUser); }
  loadUser() { this.store.dispatch(ModuleActions.getUser()); }

  selectUser() {
    return this.store.select(moduleStoreSelectors.selectUser);
  }
}
