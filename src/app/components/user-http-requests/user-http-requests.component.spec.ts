import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHttpRequestsComponent } from './user-http-requests.component';

describe('UserHttpRequestsComponent', () => {
  let component: UserHttpRequestsComponent;
  let fixture: ComponentFixture<UserHttpRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHttpRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHttpRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
