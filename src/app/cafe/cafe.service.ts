import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cafe } from './cafe';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private apiUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  getCafesAvaiables(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(this.apiUrl);
  }


}
