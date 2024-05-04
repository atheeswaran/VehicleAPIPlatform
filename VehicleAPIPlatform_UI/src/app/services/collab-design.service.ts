import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollaborationService {
  private baseUrl = 'http://localhost:5000/EventMesh';

  constructor(private http: HttpClient) { }

  processData(): Observable<any[]> {
    return this.http.post<any[]>(`${this.baseUrl}/Orchestration`, { });
  }

  triggerKafkaProducer(events: any[]): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/forwardRequest`,{events});
  }
}
