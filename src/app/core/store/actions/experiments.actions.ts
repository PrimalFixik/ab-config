import {Action} from '@ngrx/store';
import {ExperimentInterface} from "../../interfaces/experiment.interface";

export enum ExperimentsActionsEnum {
  GetExperiments = '[Experiments] Get Experiments',
  GetExperimentsSuccess = '[Experiments] Get Experiments Success',
  GetExperimentsFail = '[Experiments] Get Experiments Fail',
}

export class GetExperiments implements Action {
  public readonly type = ExperimentsActionsEnum.GetExperiments;
  constructor(public advertisementType: string, public tags: string) {}
}

export class GetExperimentsSuccess implements Action {
  public readonly type = ExperimentsActionsEnum.GetExperimentsSuccess;
  constructor(public experiments: Array<ExperimentInterface>) {}
}

export class GetExperimentsFail implements Action {
  public readonly type = ExperimentsActionsEnum.GetExperimentsFail;
  constructor(public error: any) {}
}

export type ExperimentsActions =
  | GetExperiments
  | GetExperimentsSuccess
  | GetExperimentsFail
