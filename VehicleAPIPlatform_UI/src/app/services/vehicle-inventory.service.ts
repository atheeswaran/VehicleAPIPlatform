// vehicle-inventory.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleInventoryService {
  private gatewayUrl = 'http://localhost:5000/VehicleInventory';

  constructor(private http: HttpClient) { }

  getAllVehicles(): Observable<any> {
    const query = `
      query {
        getAllVehicles {
          id
          make
          model
          year
          VIN
          quantity
          pricing
        }
      }
    `;

    return this.http.post<any>(this.gatewayUrl, { query });
  }

  getVehicleById(id: string): Observable<any> {
    const query = `
      query GetVehicleById($id: ID!) {
        getVehicleById(id: $id) {
          id
          make
          model
          year
          VIN
          quantity
          pricing
        }
      }
    `;
    const variables = {
      id
    };

    return this.http.post<any>(this.gatewayUrl, { query, variables });
  }
}
