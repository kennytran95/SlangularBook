import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SlangsService {
  constructor(private http: HttpClient) {}
  getSlangData() {
    return this.http.get('http://localhost:5016/api/word');
  }
}
