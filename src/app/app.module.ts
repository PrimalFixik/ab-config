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
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ExperimentsEffect} from "./core/store/effects/experiments.effect";
import {appReducers} from "./core/store/reducers/app.reducer";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([
        ExperimentsEffect,
    ]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
