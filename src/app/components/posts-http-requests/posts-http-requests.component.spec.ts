import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsHttpRequestsComponent } from './posts-http-requests.component';

describe('PostsHttpRequestsComponent', () => {
  let component: PostsHttpRequestsComponent;
  let fixture: ComponentFixture<PostsHttpRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsHttpRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsHttpRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
