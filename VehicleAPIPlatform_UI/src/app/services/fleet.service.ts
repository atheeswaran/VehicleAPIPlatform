// fleet.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FleetService {
  private gatewayUrl = 'http://localhost:5000/fleetoverview';

  constructor(private http: HttpClient) {}

  getFleetOverview(fleetId: string): Observable<any> {
    const query = `
      query GetFleetOverview($fleetId: ID!) {
        getFleetOverview(fleetId: $fleetId) {
          fleetId
          totalVehicles
          totalMileage
          averageFuelEfficiency
        }
      }
    `;

    return this.http.post<any>(this.gatewayUrl, { query, variables: { fleetId } });
  }
}


export class subscriptionService {
  private gatewayUrl = 'http://localhost:5000/subscription';

  constructor(private http: HttpClient) {}

  getsubscription(fleetId: string): Observable<any> {
    const query = `
      query getSubscription($subsId: ID!) {
        getSubscription(Subscriptionid: $subsId) {
          Subscriptionid: ID
          userId: ID
          fleetId: ID
          startDate: String
          endDate: String
        }
      }
    `;

    return this.http.post<any>(this.gatewayUrl, { query, variables: { fleetId } });
  }
}
