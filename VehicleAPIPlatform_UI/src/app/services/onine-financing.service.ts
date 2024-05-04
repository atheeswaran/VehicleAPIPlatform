import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://localhost:5000/Payment'; // Update with your GraphQL endpoint

  constructor(private http: HttpClient) { }

  makePayment(amount: number, currency: string): Observable<any> {
    const query = `
      mutation MakePayment($amount: Float, $currency: String) {
        makePayment(amount: $amount, currency: $currency)
      }
    `;

    return this.http.post<any>(this.apiUrl, {
      query,
      variables: {
        amount,
        currency
      }
    });
  }


  getAvailableSubscriptions(): Observable<any> {
    const query = `
      query {
        getAvailableSubscriptions {
          fleetid
          startDate
          endDate
          price
          currency
          status
        }
      }
    `;

    return this.http.post<any>(this.apiUrl, { query });
  }
}
