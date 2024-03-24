// fleet.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
@Injectable({
  providedIn: 'root'
})
export class OptimizeRouteService {
  private gatewayUrl = 'http://localhost:5000/optimizeRoute';

  constructor(private http: HttpClient) {}

  adjustRoute(vehicleId: string): Observable<any> {
    const query = `
      mutation AdjustRoute($vehicleId: ID!) {
        adjustRoute(vehicleId: $vehicleId)
      }
    `;
    const variables = {
      vehicleId
    };

    return this.http.post<any>(this.gatewayUrl, { query, variables });
  }
  }



