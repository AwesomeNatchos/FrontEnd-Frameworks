import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  fakerUsers: any[] = []
  editingUser: any;
  selectedUser: any = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getFakerUsers().subscribe(data => {
      this.fakerUsers = data.fakerusers;
    });
  }

  editUser(user: any) {
    this.selectedUser = user;
  }
  cancelEdit() {
    this.selectedUser = null;
  }

  updateUser(updatedUser: any) {
    const index = this.fakerUsers.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.fakerUsers[index] = updatedUser;
    }
    this.selectedUser = null;
  }


  onEdit(user: any) {
    this.editingUser = { ...user };
  }

  onDelete(user: any) {
    // Implement user deletion logic
  }

  onUserUpdated(updatedUser: any) {
    const index = this.fakerUsers.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.fakerUsers[index] = updatedUser;
    }
    this.editingUser = null;
  }

  onEditCancelled() {
    this.editingUser = null;
  }

}
