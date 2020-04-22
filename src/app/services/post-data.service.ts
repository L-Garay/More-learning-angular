import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/Interfaces/Post';

@Injectable({
  providedIn: 'root',
})
export class PostDataService {
  private _postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this._http.get<IPost[]>(this._postsUrl);
  }
}
