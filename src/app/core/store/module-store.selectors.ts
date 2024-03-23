import {createFeatureSelector, createSelector, MemoizedSelector} from "@ngrx/store";
import {moduleFeatureKey, ModuleState} from "./module-store.reducer";
import {AppState} from "../../app-state";

export const selectModuleState: MemoizedSelector<AppState, ModuleState> = createFeatureSelector<ModuleState>(moduleFeatureKey);

const selectSelectedProject = createSelector(
  selectModuleState,
  (state: ModuleState) => state.selectedProject
);

const selectProject = createSelector(
  selectModuleState,
  (state: ModuleState) => state.projects
);

const selectIsLoadMoreProject = createSelector(
  selectModuleState,
  (state: ModuleState) => state.isLoadMoreProject
);

const selectUser = createSelector(
  selectModuleState,
  (state: ModuleState) => state.user
);

const selectIsLoadUser = createSelector(
  selectModuleState,
  (state: ModuleState) => state.isLoadUser
);

export const moduleStoreSelectors = {
  selectSelectedProject,
  selectProject,
  selectIsLoadMoreProject,
  selectUser,
  selectIsLoadUser,
}
