import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment';

const dataUrl = environment.dataURL;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private HttpClient: HttpClient)  { } 

  loadThemes () {
    return this.HttpClient.get(`${dataUrl}/themes/`);
  }

  loadPosts (limit: number) {
    return this.HttpClient.get(`${dataUrl}/posts${limit? `?limit=${limit}` : ''}`)
  }
}
