import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/Interfaces/Post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
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
  updatePost(post: IPost): Observable<IPost> {
    const updateUrl = `${this._postsUrl}/${post.id}`;
    return this._http.put<IPost>(updateUrl, post, httpOptions);
  }
  deletePost(postId: number): Observable<IPost> {
    const url = `${this._postsUrl}/${postId}`;
    return this._http.delete<IPost>(url, httpOptions);
  }
  getPost(postId: number): Observable<IPost> {
    const url = `${this._postsUrl}/${postId}`;
    return this._http.get<IPost>(url);
  }
}
