import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MetodosService {

  url="https://bitcoin-test-a0874-default-rtdb.firebaseio.com/"
  constructor(private http: HttpClient) { }

  public getAllWallets():Observable<any>{
    return this.http.get(`${this.url}wallets.json`)
  }

  public getAllTrans():Observable<any>{
    return this.http.get(`${this.url}transactions.json`)
  }

  public delete(id: string): Observable<any>{
    return this.http.delete(
      `${this.url}transactions/${id}.json`);
  }

  public mineBTC(id:string,val):Observable<any>{
    return this.http.patch(`${this.url}wallets/${id}.json`,{"btc":val})
  }

  public mineETH(id:string,val):Observable<any>{
    return this.http.patch(`${this.url}wallets/${id}.json`,{"eth":val})
  }

  
  public createTrans(body: any): Observable<any> {
    return this.http.post(`${this.url}/transactions.json`, body);
  }

  public updateTrans(id: string, body: any): Observable<any> {
    return this.http.put(`${this.url}/transactions/${id}.json`, body);
  }
  public createWall(body: any): Observable<any> {
    return this.http.post(`${this.url}/wallets.json`, body);
  }

  public updateWall(id: string, body: any): Observable<any> {
    return this.http.put(`${this.url}/wallets/${id}.json`, body);
  }
}