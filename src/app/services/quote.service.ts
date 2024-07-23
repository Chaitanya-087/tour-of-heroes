import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }


  getQuotes(): Observable<Quote[]>{
    return this.http.get<Quote[]>('https://type.fit/api/quotes');
  }
}
