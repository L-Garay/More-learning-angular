import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PostDataService } from 'src/app/services/post-data.service';
import { IPost } from 'src/app/Interfaces/Post';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.css'],
})
export class PostsFormComponent implements OnInit {
  @Output() newPost: EventEmitter<IPost> = new EventEmitter();
  constructor(private _postDataService: PostDataService) {}

  ngOnInit(): void {}

  addPost(title, body) {
    if (!title || !body) {
      alert('please add post');
    } else {
      this._postDataService
        .addPost({ title, body } as IPost)
        .subscribe((post) => {
          this.newPost.emit(post);
        });
    }
  }
}
