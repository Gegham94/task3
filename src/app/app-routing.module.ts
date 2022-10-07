import { StatusPageComponent } from './components/status-page/status-page.component';
import { SelectionPageComponent } from './components/selection-page/selection-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: SelectionPageComponent
  },
  {
    path: 'status-page', component: StatusPageComponent
  },
  {
    path: '**', redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
