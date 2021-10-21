import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { ExperimentsTableComponent } from './shared/components/experiments-table/experiments-table.component';
import {MatTableModule} from "@angular/material/table";
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { ExperimentsComponent } from './feature/components/experiments/experiments.component';
import { TabsComponent } from './shared/components/tabs/tabs.component';
import {MatTabsModule} from "@angular/material/tabs";
import { ExperimentsGroupComponent } from './feature/components/experiments-group/experiments-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperimentsTableComponent,
    SidebarComponent,
    ExperimentsComponent,
    TabsComponent,
    ExperimentsGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatCheckboxModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
