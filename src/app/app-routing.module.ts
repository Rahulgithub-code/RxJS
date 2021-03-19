import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomObservableComponent } from './observable-comp/custom-observable/custom-observable.component';
import { FromEventComponent } from './observable-comp/from-event/from-event.component';
import { IntervalComponent } from './observable-comp/interval/interval.component';
import { ListComponent } from './observable-comp/list/list.component';
import { MapComponent } from './observable-comp/map/map.component';
import { ObservableCompComponent } from './observable-comp/observable-comp.component';
import { OfFromComponent } from './observable-comp/of-from/of-from.component';
import { ToArrayComponent } from './observable-comp/to-array/to-array.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observable', component: ObservableCompComponent, children: [
      { path: '', component: ListComponent },
      { path: 'fromevent', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'of-from', component: OfFromComponent },
      { path: 'toArray', component: ToArrayComponent },
      { path: 'custom-observable', component: CustomObservableComponent },
      { path: 'map', component: MapComponent}
    ]
  },
  { path: '**', redirectTo: 'promise' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
