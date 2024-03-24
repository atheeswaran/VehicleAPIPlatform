import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SafetyAlertsService {
  private gatewayUrl = 'http://localhost:5000/safetyAlerts';

  constructor(private http: HttpClient) {}

  safetyAlerts(vehicleId: string): Observable<any> {
    const query = `
      mutation SafetyAlerts($vehicleId: ID!) {
        safetyAlerts(vehicleId: $vehicleId)
      }
    `;
    const variables = {
      vehicleId
    };

    return this.http.post<any>(this.gatewayUrl, { query, variables });
  }
}

@Injectable({
  providedIn: 'root'
})
export class FleetOptimizationService {
  private gatewayUrl = 'http://localhost:5000/fleetOptimization';

  constructor(private http: HttpClient) {}

  getTelematics(telematicsId: string): Observable<any> {
    const query = `
      query getTelematics($telematicsId: ID!) {
        getTelematics(telematicsId: $telematicsId) {
          telematicsId: Int
          fuelEfficiency: Float
          averageSpeed: Float
          engineHealthMetrics: String
        }
      }
    `;

    return this.http.post<any>(this.gatewayUrl, { query, variables: { telematicsId } });
  }

  getAllTelematics(): Observable<any> {
    const query = `
      query {
        getAllTelematics {  
          telematicsId
          fuelEfficiency
          averageSpeed
          engineHealthMetrics
        }
      }
    `;

    return this.http.post<any>(this.gatewayUrl, { query, variables: { } });
  }
}
