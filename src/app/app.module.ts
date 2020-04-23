import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserDataService } from './services/user-data.service';
import { PostDataService } from './services/post-data.service';

import { PostsFormComponent } from './components/posts-form/posts-form.component';
import { PostsHttpRequestsComponent } from './components/posts-http-requests/posts-http-requests.component';
import { HomeComponent } from './components/home/home.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    NavbarComponent,

    PostsFormComponent,
    PostsHttpRequestsComponent,
    HomeComponent,
    PostDetailComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UserDataService, PostDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
