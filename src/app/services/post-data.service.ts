import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/Interfaces/Post';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PostDataService {
  private _postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this._http.get<IPost[]>(this._postsUrl);
  }
  addPost(post: IPost): Observable<IPost> {
    return this._http.post<IPost>(this._postsUrl, post, httpOptions);
  }
}
