import { Injectable } from '@angular/core';
import { UserDto } from '../db/userDto';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  users: UserDto[] = [
    {
      name: 'Morteza',
      lastname: 'Soltanpour',
      email: 'morteza.cs@gmail.com',
    },
    {
      name: 'Jack',
      lastname: 'Jack Jack',
      email: 'Jack.cs@gmail.com',
    },
    {
      name: 'Sara',
      lastname: 'Sara Sara',
      email: 'Sara.cs@gmail.com',
    },
    {
      name: 'Tom',
      lastname: 'Tom Tom',
      email: 'Tom.cs@gmail.com',
    },
  ];

  constructor() {}

  getUsers(): UserDto[] {
    return this.users;
  }
}
