import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, AddUserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: { username: string, email: string }[] = [];
  success: boolean = false;
  error: boolean = false;
  selectedName: string = "";

  constructor() {
    // Populate user data (replace with your actual data source)
    this.users.push({ username: 'john.doe', email: 'john.doe@example.com' });
    this.users.push({ username: 'jane.smith', email: 'jane.smith@example.com' });
    this.users.push({ username: 'Jacob', email: 'jo.jacob@example.com' });
    this.users.push({ username: 'MarinaN1', email: 'marinan@example.com' });
  }

  deleteUser() {

  }

}
