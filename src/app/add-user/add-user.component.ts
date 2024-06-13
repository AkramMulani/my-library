import { User } from './../user.model';
import { CommonModule } from '@angular/common';
import { ConnectorService } from './../connector.service';
import { Component } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, UserListComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  success: boolean = false;
  error: boolean = false;
  user: User = {username: '', email: ''};

  constructor(private service: ConnectorService) {}

  addUser() {

  }

}
