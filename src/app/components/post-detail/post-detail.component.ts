import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostDataService } from 'src/app/services/post-data.service';
import { IPost } from 'src/app/Interfaces/Post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post: IPost;
  constructor(
    private _route: ActivatedRoute,
    private _postService: PostDataService
  ) {}

  ngOnInit(): void {
    const id = +this._route.snapshot.paramMap.get('id');
    this._postService.getPost(id).subscribe((post) => {
      this.post = post;
    });
  }
}
