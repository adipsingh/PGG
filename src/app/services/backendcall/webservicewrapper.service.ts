import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WebservicewrapperService {

  constructor(private http: HttpClient) { }

  private fetchOrganizationApiURL = environment.baseServiceURL + environment.fetchOrganizationDetails;

  // example fetch organization
  fetchOrganization() {
    return this.http.post<any>(this.fetchOrganizationApiURL, '', httpOptions );
  }
}
