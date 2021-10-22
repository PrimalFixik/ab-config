import {Component, OnDestroy, OnInit} from '@angular/core';
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";
import {ExperimentInterface} from "../../../core/interfaces/experiment.interface";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../../core/store/state/app.state";
import {experimentsSelector} from "../../../core/store/selectors/experiments.selector";

@Component({
  selector: 'app-experiments-table',
  templateUrl: './experiments-table.component.html',
  styleUrls: ['./experiments-table.component.scss']
})
export class ExperimentsTableComponent implements OnInit, OnDestroy {

  experiments$: Observable<Array<ExperimentInterface>> = this.store.pipe(
      select(experimentsSelector),
  );

  elementData: Array<ExperimentInterface> = [
    {
      id: 4095,
      name: 'push_top_countries_high_medium_wo_audit',
      tags: ['push', 'tail', 'airflow'],
      openDate: '21.10.2021',
      status: true,
    },
    {
      id: 4095,
      name: 'push_top_countries_high_medium_wo_audit',
      tags: ['push', 'tail', 'airflow'],
      openDate: '21.10.2021',
      status: true,
    },
    {
      id: 4095,
      name: 'push_top_countries_high_medium_wo_audit',
      tags: ['push', 'tail', 'airflow'],
      openDate: '21.10.2021',
      status: true,
    },
    {
      id: 4095,
      name: 'push_top_countries_high_medium_wo_audit',
      tags: ['push', 'tail', 'airflow'],
      openDate: '21.10.2021',
      status: true,
    },
    {
      id: 4095,
      name: 'push_top_countries_high_medium_wo_audit',
      tags: ['push', 'tail', 'airflow'],
      openDate: '21.10.2021',
      status: true,
    },
    {
      id: 4095,
      name: 'push_top_countries_high_medium_wo_audit',
      tags: ['push', 'tail', 'airflow'],
      openDate: '21.10.2021',
      status: true,
    },
  ];
  displayedColumns: string[] = ['id', 'name', 'tags', 'openDate', 'action', 'status'];
  dataSource!: MatTableDataSource<any>;
  selection = new SelectionModel<ExperimentInterface>(true, []);

  experimentsSubscription!: any;

  constructor(private readonly store: Store<IAppState>) {}

  ngOnInit(): void {
      this.experimentsSubscription.subscribe((experiments: Array<ExperimentInterface>) => {
          if (experiments && experiments.length !== 0) {
              this.dataSource = new MatTableDataSource<ExperimentInterface>(experiments);
          }
      });
  }

  ngOnDestroy(): void {
      this.experimentsSubscription.unsubscribe();
  }
}
