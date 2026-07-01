import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() user!: any;
  @Input() isEditable = false;
  field = '';
  value = ''
  emailRegex = /^[A-Za-z]+[A-Za-z0-9\-.]+@(gmail|yahoo|outlook)\.(com|org|net)$/;


  userInfo = [
    { label: 'Email', key: 'email' },
    { label: 'Gender', key: 'gender' },
    { label: 'Password', key: 'password' },
    { label: 'Age', key: 'age' },
    { label: 'Job', key: 'jobTitle' },
  ];
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
  get canDismissModal(): boolean {
    return this.field !== 'email' || this.emailRegex.test(this.value);
  }
  saveChanges(): boolean {
    if (this.field === 'email') {
      if (!this.emailRegex.test(this.value)) {
        alert('Please enter a valid email address');
        return false;
      }
    }

    this.user[this.field] = this.value;
    return true;
  }

  getInputType(field: string): string {
    if (field === 'password') {
      return 'password';
    }
    else {
      return 'text';
    }
  }
}