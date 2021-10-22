import {ExperimentInterface} from "../../interfaces/experiment.interface";

export interface ExperimentsStateInterface  {
    experiments: Array<ExperimentInterface>;
    loadExperimentsInProgress: boolean;
    loadExperimentsError: string;
}

export const initialExperimentsState: ExperimentsStateInterface = {
    experiments: [],
    loadExperimentsInProgress: false,
    loadExperimentsError: '',
};
