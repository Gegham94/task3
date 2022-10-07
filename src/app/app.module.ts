import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';

import { SocketService } from './core/services';

import { AppComponent } from './app.component';
import { SelectionPageComponent } from './components/selection-page/selection-page.component';
import { StatusPageComponent } from './components/status-page/status-page.component';
import { StudentCardComponent } from './components/student-card/student-card.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectionPageComponent,
    StatusPageComponent,
    StudentCardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
