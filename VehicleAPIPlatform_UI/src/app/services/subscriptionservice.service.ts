import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private gatewayUrl = 'http://localhost:5000/Subscription'; // Update the URL with your GraphQL server endpoint

  constructor(private http: HttpClient) { }

  bookFleet(fleetId: string, customerName: string, startDate: string, endDate: string) {
    // Define your GraphQL mutation
    const createSubscriptionMutation = `
      mutation createSubscription($fleetId: String!, $customerName: String!, $startDate: String!, $endDate: String!) {
        createSubscription(fleetId: $fleetId, customerName: $customerName, startDate: $startDate, endDate: $endDate)

      }
    `;

    // Execute the mutation
    return this.http.post(this.gatewayUrl, {
      query: createSubscriptionMutation,
      variables: {
        fleetId,
        customerName,
        startDate,
        endDate
      }
    });
  }
}


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private gatewayUrl = 'http://localhost:5000/Customers'; // Update the URL with your GraphQL server endpoint

  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<any> {
    const query = `
      query {
        customers {
          id
          name
          email
        }
      }
    `;

    return this.http.post<any>(this.gatewayUrl, { query });
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
          availability: String
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
          availability
        }
      }
    `;

    return this.http.post<any>(this.gatewayUrl, { query, variables: { } });
  }
}