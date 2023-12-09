import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASEURL = 'http://localhost:5105/servers/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http: HttpClient) {  }

  getServers(): Observable<any> {
    return this.http.get(BASEURL, httpOptions);
  }
}
