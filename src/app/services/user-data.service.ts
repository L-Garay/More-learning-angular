import { Injectable } from '@angular/core';
import { IUser } from '../Interfaces/User';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  users: IUser[];
  constructor() {
    this.users = [
      {
        firstName: 'Logan',
        lastName: 'Garay',
        age: 22,
        email: 'logan@email.com',
        image: 'https://via.placeholder.com/200/200',
        registeredDate: new Date('01/12/2015 08:30:00'),
        isActive: true,
        hide: true,
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
        hide: true,
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
        hide: true,
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
        hide: true,
      },
    ];
  }
  getUsers(): Observable<IUser[]> {
    return of(this.users);
  }
  addUser(user: IUser) {
    this.users.unshift(user);
  }
}
