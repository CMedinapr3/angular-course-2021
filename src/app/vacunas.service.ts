import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class VacunasService {

  url="https://vaccines-test-default-rtdb.firebaseio.com/"
  constructor(private http: HttpClient) { }

  public getAllVaccinated():Observable<any>{
    return this.http.get(`${this.url}vaccinated.json`)
  }

  public getAllUnvaccinated():Observable<any>{
    return this.http.get(`${this.url}unvaccinated.json`)
  }

  public update(id: string, body: any): Observable<any>{
    return this.http.put(
      `${this.url}/unvaccinated/${id}.json`,
      body);
  }

  
  public create(body: any): Observable<any>{
    return this.http.post(
      `${this.url}/vaccinated.json`,
      body);
  }

  public patch(id: string, body: any): Observable<any>{
    return this.http.patch(`${this.url}/unvaccinated/${id}.json`,body);
  }

  public deleteUnvaccinated(id: string): Observable<any>{
    return this.http.delete(
      `${this.url}/unvaccinated/${id}.json`);
  }
}