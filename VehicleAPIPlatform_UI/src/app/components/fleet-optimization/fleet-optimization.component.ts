import { Component } from '@angular/core';
import { FleetOptimizationService, OptimizeRouteService  } from '../../services/fleet-optimization.service'; // Import your FleetOptimizationService

@Component({
  selector: 'app-fleet-optimization',
  templateUrl: './fleet-optimization.component.html',
  styleUrls: ['./fleet-optimization.component.css']
})
export class FleetOptimizationComponent {
  telematicsAnalyticsData: any; // Variable to store TelematicsAnalytics data
  optimizationInProgress: boolean = false; // Flag to track optimization process
  adjustRouteResponse: { [key: string]: string  } = {}; // Define adjustRouteResponse as an object with string keys and values containing an object with a message property


  constructor(private fleetOptimizationService: FleetOptimizationService,
    private optimizeRouteService: OptimizeRouteService) 
    {}

  ngOnInit() {
    // Load TelematicsAnalytics data when the component initializes
    this.loadTelematicsAnalyticsData();
  }

  loadTelematicsAnalyticsData() {
    // Call your service to fetch TelematicsAnalytics data
    this.fleetOptimizationService.getAllTelematics().subscribe(
      (data) => {
        this.telematicsAnalyticsData = data;
      },
      (error) => {
        console.error('Failed to load TelematicsAnalytics data:', error);
      }
    );
  }
  adjustRoute(vehicleId: string): void {
    this.optimizeRouteService.adjustRoute(vehicleId).subscribe(
      response => {
        // Handle success response
        console.log('Route adjustment successful:', response);
        this.adjustRouteResponse[vehicleId] = response.data.adjustRoute;;
      },
      error => {
        // Handle error response
        console.error('Failed to adjust route:', error);
      }
    );
  } 
}

