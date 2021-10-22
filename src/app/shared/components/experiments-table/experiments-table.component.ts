import { Component, OnInit } from '@angular/core';
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";
import {ExperimentInterface} from "../../../core/interfaces/experiment.interface";

@Component({
  selector: 'app-experiments-table',
  templateUrl: './experiments-table.component.html',
  styleUrls: ['./experiments-table.component.scss']
})
export class ExperimentsTableComponent implements OnInit {

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
  dataSource = new MatTableDataSource<ExperimentInterface>(this.elementData);
  selection = new SelectionModel<ExperimentInterface>(true, []);

  constructor() { }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnInit(): void {
  }

}
