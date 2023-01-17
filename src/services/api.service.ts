import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<any> {
    const url = 'https://api.escuelajs.co/api/v1/products';
    return this.http.get<any>(url);
  }
}
