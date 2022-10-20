import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WebsiteMetaData } from '../model/website-metadata';

@Injectable({
  providedIn: 'root'
})
export class WebsiteMetadataService {

  private host = environment.apiURL;

  constructor(private http: HttpClient) { }


  retrieveWebsiteMetadata(url: string): Observable<WebsiteMetaData> {
    console.log('requesting metadata ' + url);
    return this.http.post<WebsiteMetaData>(`${this.host}/website-metadata`, { url });
  }
}
