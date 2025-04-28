import { Component, OnInit } from '@angular/core';
import { UserServicesService } from './../../services/user.services.service';
import { UserDto } from '../../db/userDto';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [NgFor],
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: UserDto[] | undefined;

  constructor(private userServices: UserServicesService) {}
  ngOnInit(): void {
    this.users = this.userServices.getUsers();
  }
}
