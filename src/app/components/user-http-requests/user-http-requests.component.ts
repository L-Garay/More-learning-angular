import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/Interfaces/Post';
import { PostDataService } from 'src/app/services/post-data.service';

@Component({
  selector: 'app-user-http-requests',
  templateUrl: './user-http-requests.component.html',
  styleUrls: ['./user-http-requests.component.css'],
})
export class UserHttpRequestsComponent implements OnInit {
  posts: IPost[];
  constructor(private _postService: PostDataService) {}

  ngOnInit(): void {
    this._postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
