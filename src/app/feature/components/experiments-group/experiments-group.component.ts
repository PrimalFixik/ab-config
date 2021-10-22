import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {GetExperiments} from "../../../core/store/actions/experiments.actions";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../core/store/state/app.state";

@Component({
  selector: 'app-experiments-group',
  templateUrl: './experiments-group.component.html',
  styleUrls: ['./experiments-group.component.scss']
})
export class ExperimentsGroupComponent implements OnInit {
    searchInput = new FormControl('', []);

    constructor(private readonly store: Store<IAppState>) {}

    ngOnInit(): void {
    }

    search(): void {
        if (!this.searchInput.value) {
            return;
        }

        const tags = this.searchInput.value.split(' ');
        this.store.dispatch(new GetExperiments('onclick', tags))
    }
}
