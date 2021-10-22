import {ExperimentsStateInterface, initialExperimentsState} from "./experiments.state";

export interface IAppState {
  experiments: ExperimentsStateInterface;
}

export const initialAppState: IAppState = {
  experiments: initialExperimentsState,
};
