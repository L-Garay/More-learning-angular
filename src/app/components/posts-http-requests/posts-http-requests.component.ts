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
  currentPost: IPost = {
    id: 0,
    title: '',
    body: '',
  };
  isEdit: boolean = false;
  constructor(private _postService: PostDataService) {}

  ngOnInit(): void {
    this._postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  onNewPost(post: IPost) {
    this.posts.unshift(post);
  }

  editPost(post: IPost) {
    this.currentPost = post;
    this.isEdit = true;
  }
  onUpdatedPost(post: IPost) {
    this.posts.forEach((current, index) => {
      if (post.id === current.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: '',
        };
      } else {
        console.log("can't find the post");
      }
    });
  }

  deletePost(post: IPost) {
    if (confirm('Are you sure you want to delete?')) {
      this._postService.deletePost(post.id).subscribe(() => {
        this.posts.forEach((current, index) => {
          if (post.id === current.id) {
            this.posts.splice(index, 1);
          } else {
            console.log("Can't find that post");
          }
        });
      });
    }
  }
}
