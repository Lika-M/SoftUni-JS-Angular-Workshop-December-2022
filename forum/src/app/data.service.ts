import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment';
import { ITheme } from './interfaces/theme';
import { IPost } from './interfaces/post';

const dataURL = environment.dataURL;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private HttpClient: HttpClient)  { } 

  loadThemes () {
    return this.HttpClient.get<ITheme[]>(`${dataURL}/themes`);
  }

  loadPosts (limit?: number) {
    return this.HttpClient.get<IPost[]>(`${dataURL}/posts${limit ? `?limit=${limit}` : ''}`)
  }
}
