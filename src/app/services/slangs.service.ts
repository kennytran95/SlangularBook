import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from '../data';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SlangsService {
  constructor(private http: HttpClient) {}

  private url: string = 'http://localhost:5016';

  private _wordAdded = new Subject<void>();

  get WordAdded() {
    return this._wordAdded;
  }

  public getSlangData(): Observable<object> {
    return this.http.get(`${this.url}/api/word`);
  }
  public deleteSlangData(id: number) {
    return this.http.delete(`${this.url}/api/word/${id}`);
  }
  public postSlangData(data: data) {
    return this.http.post(`${this.url}/api/word`, data).pipe(
      tap(() => {
        this.WordAdded.next();
      })
    );
  }
}
