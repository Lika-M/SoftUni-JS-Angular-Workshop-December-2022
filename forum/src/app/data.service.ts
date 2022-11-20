import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment';
import { ITheme } from './interfaces/theme';
import { IPost } from './interfaces/post';
import { Observable } from 'rxjs';

const dataURL = environment.dataURL;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private HttpClient: HttpClient) { }

  loadThemes(): Observable<ITheme[]> {
    return this.HttpClient.get<ITheme[]>(
      `${dataURL}/themes`
    );
  }

  loadThemeById(id: number): Observable<ITheme> {
    return this.HttpClient.get<ITheme>(`${dataURL}/themes/${id}`)
  }

  loadPosts(limit?: number): Observable<IPost[]> {
    return this.HttpClient.get<IPost[]>(
      `${dataURL}/posts${limit ? `?limit=${limit}` : ''}`
    );
  }
}
