import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, switchMap} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {of} from "rxjs";
import {
  ExperimentsActionsEnum,
  GetExperiments,
  GetExperimentsFail,
  GetExperimentsSuccess
} from "../actions/experiments.actions";
import {IAppState} from "../state/app.state";
import {ExperimentInterface} from "../../interfaces/experiment.interface";
import {ExperimentsService} from "../../services/experiments.service";

@Injectable()
export class ExperimentsEffect {
    constructor(
        private readonly actions: Actions,
        private readonly store$: Store<IAppState>,
        private readonly experimentsService: ExperimentsService,
    ) {}

    @Effect()
    getExperiments$ = this.actions.pipe(
        ofType<GetExperiments>(ExperimentsActionsEnum.GetExperiments),
        switchMap(({advertisementType, tags}) => {
            return this.experimentsService.getExperiments(advertisementType, tags).pipe(
                switchMap((response: Array<ExperimentInterface>) => [
                    new GetExperimentsSuccess(response)
                ]),
                catchError(error => of(new GetExperimentsFail(error))),
            )
        }),
    );
}
