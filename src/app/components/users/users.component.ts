import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interfaces/User';

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
  customStyles: object = {};

  constructor() {}

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
    this.users = [
      {
        firstName: 'Logan',
        lastName: 'Garay',
        age: 22,
        email: 'logan@email.com',
        image: 'https://via.placeholder.com/200/200',
        isActive: true,
        address: {
          street: '123 W st',
          city: 'Boise',
          state: 'ID',
        },
      },
      {
        firstName: 'Bob',
        lastName: 'Smith',
        age: 42,
        email: 'bob@email.com',
        image: 'https://via.placeholder.com/200/200',
        isActive: false,
        address: {
          street: '987 S ave',
          city: 'Boise',
          state: 'ID',
        },
      },
      {
        firstName: 'Rachel',
        lastName: 'Green',
        age: 32,
        email: 'rachel@email.com',
        image: 'https://via.placeholder.com/200/200',
        isActive: true,
        address: {
          street: '456 E blvd',
          city: 'Nampa',
          state: 'ID',
        },
      },
      {
        firstName: 'Tim',
        lastName: 'Vance',
        age: 56,
        email: 'tim@email.com',
        image: 'https://via.placeholder.com/200/200',
        isActive: false,
      },
    ];
  }

  // addUser(user: IUser) {
  //   this.users.push(user);
  // }
}
