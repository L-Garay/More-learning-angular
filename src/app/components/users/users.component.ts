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
        registeredDate: new Date('01/12/2015 08:30:00'),
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
        registeredDate: new Date('06/29/2012 08:30:00'),
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
        registeredDate: new Date('11/07/2014 08:30:00'),
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
        registeredDate: new Date('09/22/2019 08:30:00'),
        isActive: false,
      },
    ];
  }

  // addUser(user: IUser) {
  //   this.users.push(user);
  // }
}
