import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Antonio'
    },
    {
      id: 2,
      name: 'Tanima'
    },
    {
      id: 3,
      name: 'Alexander'
    }
  ];
}
