// vehicle-specification.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleSpecificationService {
  private gatewayUrl = 'http://localhost:5000/VehicleSpecs'; // Assuming your GraphQL server endpoint
  
  constructor(private http: HttpClient) {}

  getVehicleSpecification(id: string): Observable<any> {
    const query = `
      query GetVehicleSpecification($id: ID!) {
        getVehicleSpecification(id: $id) {
          id
          model
          make
          year
          VIN
        }
      }
    `;

    console.log('query :',query );
    const variables = { id };
    // Get JWT token from local storage
    const token = localStorage.getItem('jwtToken');
    console.log('token :',token );
    // Check if token exists
    if (!token) {
      // Handle error (e.g., redirect to login page or show error message)
      console.error('JWT token not found in local storage');
      // You can throw an error or return an Observable with an error, depending on your error handling strategy
      return new Observable(observer => observer.error('JWT token not found in local storage'));
    }

    // Set authorization header with token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(this.gatewayUrl, { query, variables }, { headers });
  }

  getAllVehicleSpecs(): Observable<any> {
    const query = `
      query {
        getAllVehicleSpecs {
          id
          model
          make
          year
          VIN
        }
      }
    `;
    console.log('query :',query ); 
    // Get JWT token from local storage
    const token = localStorage.getItem('jwtToken');
    console.log('token :',token );
    if (!token) {      
      console.error('JWT token not found in local storage');
      return new Observable(observer => observer.error('JWT token not found in local storage'));
    }
    // Set authorization header with token
    const headers = new HttpHeaders().set('authorization', `Bearer ${token}`);
    console.log('headers :',headers );
    return this.http.post<any>(this.gatewayUrl, { query }, { headers }); 
  }
}
