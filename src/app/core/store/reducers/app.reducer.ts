import {ActionReducerMap} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {experimentsReducers} from "./experiments.reducer";

export const appReducers: ActionReducerMap<IAppState, any> = {
  experiments: experimentsReducers
}
