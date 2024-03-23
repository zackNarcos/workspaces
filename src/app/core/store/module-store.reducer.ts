import {Action, createReducer, on} from "@ngrx/store";
import {ModuleActions} from "./module-store.actions";
import {User} from "../models/user";
import {Project} from "../models/project";

export const moduleFeatureKey = 'module';
export interface ModuleState {
  projects: Project[];
  user: User | null,
  isLoadMoreProject: boolean,
  selectedProject: Project | null,
  error?: any;
  isLoadUser: boolean;
}

export const ModuleInitialState: ModuleState = {
  projects: [],
  user: null,
  isLoadMoreProject: true,
  selectedProject: null,
  error: null,
  isLoadUser: true,
}

const reducer = createReducer(
  ModuleInitialState,
    //reset state
    on(ModuleActions.clear, state => ({...ModuleInitialState})),
    on(ModuleActions.loadProject, state => ({...state, isLoadMoreProject: true})),
    on(ModuleActions.loadProjectSuccess, (state, {projects}) => ({...state, projects, isLoadMoreProject: false})),
    on(ModuleActions.loadProjectFailure, (state, {error}) => ({...state, error, isLoadMoreProject: false})),
    on(ModuleActions.loadProjectAnonyme, state => ({...state, isLoadMoreProject: true})),
    on(ModuleActions.loadProjectAnonymeSuccess, (state, {projects}) => ({...state, projects, isLoadMoreProject: false})),
    on(ModuleActions.loadProjectAnonymeFailure, (state, {error}) => ({...state, error, isLoadMoreProject: false})),
    on(ModuleActions.setSelectedProject, (state, {project}) => ({...state, selectedProject: project})),
    on(ModuleActions.deleteProject, state => ({...state})),
    on(ModuleActions.deleteProjectSuccess, state => ({...state})),
    on(ModuleActions.deleteProjectFailure, (state, {error}) => ({...state, error})),
    on(ModuleActions.updateProject, state => ({...state})),
    on(ModuleActions.updateProjectSuccess, state => ({...state})),
    on(ModuleActions.updateProjectFailure, (state, {error}) => ({...state, error})),
    on(ModuleActions.addProject, state => ({...state})),
    on(ModuleActions.addProjectSuccess, state => ({...state})),
    on(ModuleActions.addProjectFailure, (state, {error}) => ({...state, error})),
    on(ModuleActions.deleteProject, state => ({...state})),
    on(ModuleActions.deleteProjectSuccess, state => ({...state})),
    on(ModuleActions.deleteProjectFailure, (state, {error}) => ({...state, error})),
    on(ModuleActions.getUser, state => ({...state, isLoadUser: true})),
    on(ModuleActions.getUserSuccess, (state, {user}) => ({...state, user, isLoadUser: false})),
    on(ModuleActions.getUserFailure, (state, {error}) => ({...state, error, isLoadUser: false})),
  );

export function moduleReducer(state: ModuleState | undefined, action: Action) {
  return reducer(state, action);
}
