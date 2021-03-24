import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './include/header/header.component';
import { FooterComponent } from './include/footer/footer.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableCompComponent } from './observable-comp/observable-comp.component';
import { FromEventComponent } from './observable-comp/from-event/from-event.component';
import { ListComponent } from './observable-comp/list/list.component';
import { IntervalComponent } from './observable-comp/interval/interval.component';
import { OfFromComponent } from './observable-comp/of-from/of-from.component';
import { ToArrayComponent } from './observable-comp/to-array/to-array.component';
import { CustomObservableComponent } from './observable-comp/custom-observable/custom-observable.component';
import { MapComponent } from './observable-comp/map/map.component';
import { PluckComponent } from './observable-comp/pluck/pluck.component';
import { FilterComponent } from './observable-comp/filter/filter.component';
import { TapComponent } from './observable-comp/tap/tap.component';
import { TakeComponent } from './observable-comp/take/take.component';
import { RetryComponent } from './observable-comp/retry/retry.component';
import { DebounceTimeComponent } from './observable-comp/debounce-time/debounce-time.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { SubjectComponent } from './observable-comp/subject/subject.component';
import { Comp1Component } from './observable-comp/comp/comp1/comp1.component';
import { Comp2Component } from './observable-comp/comp/comp2/comp2.component';
import { Comp3Component } from './observable-comp/comp/comp3/comp3.component';
import { ReplaySubjectComponent } from './observable-comp/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observable-comp/async-subject/async-subject.component';
import { ConcatComponent } from './observable-comp/concat/concat.component';
import { MergeComponent } from './observable-comp/merge/merge.component';
import { MergeMapComponent } from './observable-comp/merge-map/merge-map.component';
import { ConcatMapComponent } from './observable-comp/concat-map/concat-map.component';
import { ConcatMap2Component } from './observable-comp/concat-map2/concat-map2.component';
import { SwitchMapComponent } from './observable-comp/switch-map/switch-map.component';
import { SwitchMap2Component } from './observable-comp/switch-map2/switch-map2.component';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PromiseComponent,
    ObservableCompComponent,
    FromEventComponent,
    ListComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ConcatComponent,
    MergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
    ConcatMap2Component,
    SwitchMapComponent,
    SwitchMap2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoadingBarModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
