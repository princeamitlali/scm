import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { RealTimeContainerTrackingComponent } from './component/real-time-container-tracking/real-time-container-tracking.component';
import { PredictiveVisibilityComponent } from './component/predictive-visibility/predictive-visibility.component';
import { PortCongestionComponent } from './component/port-congestion/port-congestion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RealTimeContainerTrackingComponent,
    PredictiveVisibilityComponent,
    PortCongestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
