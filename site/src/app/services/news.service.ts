import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url = environment.apiUrl + '/blogs';
  token = '';
  headers:any;

  constructor(private http: HttpClient) {
  }

  getNews(){
    return this.http.get<any>(`${this.url}/public`);
  }
}
