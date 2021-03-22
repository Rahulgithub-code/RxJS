import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncSubjectComponent } from './observable-comp/async-subject/async-subject.component';
import { ConcatComponent } from './observable-comp/concat/concat.component';
import { CustomObservableComponent } from './observable-comp/custom-observable/custom-observable.component';
import { DebounceTimeComponent } from './observable-comp/debounce-time/debounce-time.component';
import { FilterComponent } from './observable-comp/filter/filter.component';
import { FromEventComponent } from './observable-comp/from-event/from-event.component';
import { IntervalComponent } from './observable-comp/interval/interval.component';
import { ListComponent } from './observable-comp/list/list.component';
import { MapComponent } from './observable-comp/map/map.component';
import { MergeComponent } from './observable-comp/merge/merge.component';
import { ObservableCompComponent } from './observable-comp/observable-comp.component';
import { OfFromComponent } from './observable-comp/of-from/of-from.component';
import { PluckComponent } from './observable-comp/pluck/pluck.component';
import { ReplaySubjectComponent } from './observable-comp/replay-subject/replay-subject.component';
import { RetryComponent } from './observable-comp/retry/retry.component';
import { SubjectComponent } from './observable-comp/subject/subject.component';
import { TakeComponent } from './observable-comp/take/take.component';
import { TapComponent } from './observable-comp/tap/tap.component';
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
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'take', component: TakeComponent },
      { path: 'retry', component: RetryComponent },
      { path: 'debounce-time', component: DebounceTimeComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'replay-subject', component: ReplaySubjectComponent },
      { path: 'async-subject', component: AsyncSubjectComponent },
      { path: 'concat', component: ConcatComponent},
      { path: 'merge', component: MergeComponent}
    ]
  },
  { path: '**', redirectTo: 'promise' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
