import {User} from "../models/user";
import {Project} from "../models/project";
import {createAction, props} from "@ngrx/store";
export enum ModuleStoreActionsTypes {
  clear = '[Module] Clear',

  loadProject = '[Module] Load Project',
  loadProjectSuccess = '[Module] Load Project Success',
  loadProjectFailure = '[Module] Load Project Failure',

  loadProjectAnonyme = '[Module] Load Project',
  loadProjectSuccessAnonyme = '[Module] Load Project Success',
  loadProjectFailureAnonyme = '[Module] Load Project Failure',

  addProject = '[Module] Add Project',
  addProjectSuccess = '[Module] Add Project Success',
  addProjectFailure = '[Module] Add Project Failure',

  updateProject = '[Module] Update Project',
  updateProjectSuccess = '[Module] Update Project Success',
  updateProjectFailure = '[Module] Update Project Failure',

  deleteProject = '[Module] Delete Project',
  deleteProjectSuccess = '[Module] Delete Project Success',
  deleteProjectFailure = '[Module] Delete Project Failure',

  setSelectedProject = '[Module] Set Selected Project',

  getUser = '[Module] Get User',
  getUserSuccess = '[Module] Get User Success',
  getUserFailure = '[Module] Get User Failure',
}


const clear = createAction(
  ModuleStoreActionsTypes.clear,
);

const loadProject = createAction(
  ModuleStoreActionsTypes.loadProject,
);

const loadProjectSuccess = createAction(
  ModuleStoreActionsTypes.loadProjectSuccess,
  props<{ projects: [] }>()
);

const loadProjectFailure = createAction(
  ModuleStoreActionsTypes.loadProjectFailure,
  props<{ error: any }>()
);

const loadProjectAnonyme = createAction(
  ModuleStoreActionsTypes.loadProject,
);

const loadProjectAnonymeSuccess = createAction(
  ModuleStoreActionsTypes.loadProjectSuccess,
  props<{ projects: [] }>()
);

const loadProjectAnonymeFailure = createAction(
  ModuleStoreActionsTypes.loadProjectFailure,
  props<{ error: any }>()
);

const addProject = createAction(
  ModuleStoreActionsTypes.addProject,
  props<{ project: Project }>()
);

const addProjectSuccess = createAction(
  ModuleStoreActionsTypes.addProjectSuccess,
  props<{ project: Project }>()
);

const addProjectFailure = createAction(
  ModuleStoreActionsTypes.addProjectFailure,
  props<{ error: any }>()
);

const updateProject = createAction(
  ModuleStoreActionsTypes.updateProject,
  props<{ project: Project }>()
);

const updateProjectSuccess = createAction(
  ModuleStoreActionsTypes.updateProjectSuccess,
  props<{ project: Project }>()
);

const updateProjectFailure = createAction(
  ModuleStoreActionsTypes.updateProjectFailure,
  props<{ error: any }>()
);

const deleteProject = createAction(
  ModuleStoreActionsTypes.deleteProject,
  props<{ project: Project }>()
);

const deleteProjectSuccess = createAction(
  ModuleStoreActionsTypes.deleteProjectSuccess,
  props<{ project: Project }>()
);

const deleteProjectFailure = createAction(
  ModuleStoreActionsTypes.deleteProjectFailure,
  props<{ error: any }>()
);

const setSelectedProject = createAction(
  ModuleStoreActionsTypes.setSelectedProject,
  props<{ project: Project }>()
);

const getUser = createAction(
  ModuleStoreActionsTypes.getUser,
);

const getUserSuccess = createAction(
  ModuleStoreActionsTypes.getUserSuccess,
  props<{ user: User }>()
);

const getUserFailure = createAction(
  ModuleStoreActionsTypes.getUserFailure,
  props<{ error: any }>()
);

export const ModuleActions = {
  clear,
  loadProject,
  loadProjectSuccess,
  loadProjectFailure,
  addProject,
  addProjectSuccess,
  addProjectFailure,
  updateProject,
  updateProjectSuccess,
  updateProjectFailure,
  deleteProject,
  deleteProjectSuccess,
  deleteProjectFailure,
  setSelectedProject,
  getUser,
  getUserSuccess,
  getUserFailure,
  loadProjectAnonyme,
  loadProjectAnonymeSuccess,
  loadProjectAnonymeFailure,
};
