import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {ExperimentsStateInterface} from "../state/experiments.state";

const selectExperimentsStates = (state: IAppState) => state.experiments;

export const experimentsSelector = createSelector(
  selectExperimentsStates,
  (state: ExperimentsStateInterface) => state.experiments,
);

export const loadExperimentsInProgressSelector = createSelector(
  selectExperimentsStates,
  (state: ExperimentsStateInterface) => state.loadExperimentsInProgress,
);

export const loadExperimentsErrorSelector = createSelector(
  selectExperimentsStates,
  (state: ExperimentsStateInterface) => state.loadExperimentsError,
);
