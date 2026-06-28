import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [CommonModule,FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() user!: any;
  field='';
  value=''

  userInfo = [
    { label: 'Email', key: 'email' },
    { label: 'Gender', key: 'gender' },
    { label: 'Password', key: 'password' },
    { label: 'Age', key: 'age' },
    { label: 'Job', key: 'jobTitle' },
  ];
  get isEditable(): boolean {
    return this.user?.email === 'Matya032@gmail.com';
  }
  get isAdmin(): boolean {
    return this.user?.admin === true;
  }
  get isClient(): boolean {
    return this.user?.client === true;
  }
  openEdit(field: string, value: string) {
    this.field = field;
    this.value = value;
  }
  saveChanges() {
  this.user[this.field] = this.value;
}
}