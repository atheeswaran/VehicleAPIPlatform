import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ApolloModule } from 'apollo-angular'; // Import ApolloModule from 'apollo-angular'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { FleetOptimizationComponent } from './components/fleet-optimization/fleet-optimization.component';
import { SafetyAlertsComponent } from './components/safety-alerts/safety-alerts.component';
import { SubscriptionServiceComponent } from './components/subscription-service/subscription-service.component';
import { VehicleSpecsComponent } from './components/vehicle-specs/vehicle-specs.component';
import { VehicleInventoryComponent } from './components/vehicle-inventory/vehicle-inventory.component';
import { OnlineFinancingComponent } from './components/online-financing/online-financing.component';
import { CollaborationComponent } from './components/collab-design/collab-design.component';
import { FleetOptimizationService, OptimizeRouteService } from './services/fleet-optimization.service';
import { LoginComponent } from './components/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    FleetComponent,
    FleetOptimizationComponent,
    SafetyAlertsComponent,
    SubscriptionServiceComponent,
    VehicleSpecsComponent,
    VehicleInventoryComponent,
    OnlineFinancingComponent,
    CollaborationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //ApolloModule // Include ApolloModule here
  ],
  providers: [
    FleetOptimizationService,
    OptimizeRouteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
