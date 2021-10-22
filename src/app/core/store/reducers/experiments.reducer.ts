import {ExperimentsStateInterface, initialExperimentsState} from "../state/experiments.state";
import {ExperimentsActions, ExperimentsActionsEnum} from "../actions/experiments.actions";

export function experimentsReducers(
    state = initialExperimentsState,
    action: ExperimentsActions,
): ExperimentsStateInterface {
    switch (action.type) {
        case ExperimentsActionsEnum.GetExperiments: {
            return {
                ...state,
                loadExperimentsInProgress: true,
            };
        }

        case ExperimentsActionsEnum.GetExperimentsSuccess: {
            return {
                ...state,
                experiments: action.experiments,
                loadExperimentsInProgress: false,
            };
        }

        case ExperimentsActionsEnum.GetExperimentsFail: {
            return {
                ...state,
                loadExperimentsInProgress: false,
                loadExperimentsError: action.error,
            };
        }

        default: {
            return state;
        }
    }
}
