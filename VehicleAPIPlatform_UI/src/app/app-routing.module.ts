import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FleetOptimizationComponent } from './components/fleet-optimization/fleet-optimization.component';
import { SafetyAlertsComponent } from './components/safety-alerts/safety-alerts.component';
import { SubscriptionServiceComponent } from './components/subscription-service/subscription-service.component';
import { VehicleSpecsComponent } from './components/vehicle-specs/vehicle-specs.component';
import { VehicleInventoryComponent } from './components/vehicle-inventory/vehicle-inventory.component';
import { OnlineFinancingComponent } from './components/online-financing/online-financing.component';
import { CollaborationComponent } from './components/collab-design/collab-design.component';
import { LoginComponent } from './components/authentication/authentication.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: AppComponent },
  { path: 'FleetOptimization', component: FleetOptimizationComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route redirects to login

   { path: 'SafetyAlerts', component: SafetyAlertsComponent },
   { path: 'SubscriptionService', component: SubscriptionServiceComponent },
   { path: 'VehicleSpecs', component: VehicleSpecsComponent },
   { path: 'VehicleInventory', component: VehicleInventoryComponent },
   { path: 'OnlineFinancing', component: OnlineFinancingComponent },
   { path: 'CollabDesign', component: CollaborationComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
