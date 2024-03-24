import { Component, OnDestroy, OnInit } from '@angular/core';
import { FleetOptimizationService, SafetyAlertsService } from '../../services/safety-alerts.service';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';

@Component({  
  selector: 'app-safety-alerts',
  templateUrl: './safety-alerts.component.html',
  styleUrls: ['./safety-alerts.component.css']
})
export class SafetyAlertsComponent implements OnInit {
  telematicsData: any;
  subscription: Subscription | undefined;

  constructor(/*private apollo  : Apollo,*/private fleetOptimizationService: FleetOptimizationService,
   private safetyAlertsService: SafetyAlertsService) {}
   telematicsAnalyticsData: any;
   safetyAlertsResponse: { [key: string]: string  } = {};
  // ngOnInit(): void {
  //   this.subscription = this.apollo.subscribe({
  //     query: gql`
  //       subscription {
  //         telematicsDataReceived {
  //           telematicsId
  //           fuelEfficiency
  //           averageSpeed
  //           engineHealthMetrics
  //         }
  //       }
  //     `
  //   }).subscribe((result) => {
  //     const data = result.data as { telematicsDataReceived: any };
  //     this.telematicsData = data.telematicsDataReceived;
  //     console.log('Received Telematics Data:', this.telematicsData);
  //   });
  // }

  // ngOnDestroy(): void {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }

  ngOnInit() {
    // Load TelematicsAnalytics data when the component initializes
    this.loadTelematicsAnalyticsData();
  }

  loadTelematicsAnalyticsData() {
    // Call your service to fetch TelematicsAnalytics data
    this.fleetOptimizationService.getAllTelematics().subscribe(
      (data) => {
        this.telematicsData = data;
      },
      (error) => {
        console.error('Failed to load TelematicsAnalytics data:', error);
      }
    );
  }

  safetyAlerts(vehicleId: string): void {
    this.safetyAlertsService.safetyAlerts(vehicleId).subscribe(
      response => {
        console.log('Safety Alerts successful:', response);
        //this.safetyAlertsResponse[vehicleId] = response.data.safetyAlerts;
        this.safetyAlertsResponse[vehicleId] = 'Safety alert!!!: High speed detected for fleet with ID: 2'
      },
      error => {
        console.error('Failed to raise safety alerts:', error);
      }
    );
  }
}
