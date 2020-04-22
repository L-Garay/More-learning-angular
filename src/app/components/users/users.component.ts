import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from 'src/app/Interfaces/User';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: IUser[];
  showExtended: boolean = true;
  loaded: boolean = false;
  allowNewUser: boolean = true;
  toggleForm: boolean = false;
  newUser: IUser = {
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    image: '',
    isActive: true,
    registeredDate: new Date(),
    hide: true,
    address: {
      street: '',
      city: '',
      state: '',
    },
  };
  @ViewChild('userForm') form: any;

  constructor(private _userData: UserDataService) {}

  // NOTE Fake loading example
  // ngOnInit(): void {
  //   setTimeout(() => {
  //     this.users = [
  //       {
  //         firstName: 'Logan',
  //         lastName: 'Garay',
  //         age: 22,
  //         email: 'logan@email.com',
  //         address: {
  //           street: '123 W st',
  //           city: 'Boise',
  //           state: 'ID',
  //         },
  //       },
  //       {
  //         firstName: 'Bob',
  //         lastName: 'Smith',
  //         age: 42,
  //         email: 'bob@email.com',
  //         address: {
  //           street: '987 S ave',
  //           city: 'Boise',
  //           state: 'ID',
  //         },
  //       },
  //       {
  //         firstName: 'Rachel',
  //         lastName: 'Green',
  //         age: 32,
  //         email: 'rachel@email.com',
  //         address: {
  //           street: '456 E blvd',
  //           city: 'Nampa',
  //           state: 'ID',
  //         },
  //       },
  //     ];
  //     this.loaded = true;
  //   }, 2500);
  // }
  ngOnInit(): void {
    this._userData.getUsers().subscribe((users) => {
      this.users = users;
      /* this.loaded = true; */
    });
  }

  submitNewUser({ value, valid }: { value: IUser; valid: boolean }) {
    if (!valid) {
      console.log('Form not valid');
    } else {
      value.isActive = true;
      value.registeredDate = new Date();
      value.hide = true;
      this._userData.addUser(value);
      this.form.reset();
    }
  }
}
