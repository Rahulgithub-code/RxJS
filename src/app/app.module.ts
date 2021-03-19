import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
