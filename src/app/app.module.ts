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
import { UserHttpRequestsComponent } from './components/user-http-requests/user-http-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    NavbarComponent,
    UserHttpRequestsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UserDataService, PostDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
