import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/Interfaces/Post';
import { PostDataService } from 'src/app/services/post-data.service';

@Component({
  selector: 'app-posts-http-requests',
  templateUrl: './posts-http-requests.component.html',
  styleUrls: ['./posts-http-requests.component.css'],
})
export class PostsHttpRequestsComponent implements OnInit {
  posts: IPost[];
  constructor(private _postService: PostDataService) {}

  ngOnInit(): void {
    this._postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  onNewPost(post: IPost) {
    this.posts.unshift(post);
  }
}
