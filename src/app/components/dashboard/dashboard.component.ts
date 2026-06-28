import { Component } from '@angular/core';
import { AdminService } from '../shared/services/admin.service';
import { UserComponent } from '../user/user.component';
import { CommonModule } from '@angular/common';
import { Observable, map, pipe } from 'rxjs';
import { ClientService } from '../shared/services/client.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-dashboard',
  imports: [UserComponent, CommonModule,ProductComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  admins$!: Observable<any>;
  clients$!: Observable<any>;

  user = {
    name: 'Mohamed Atya',
    email: 'Matya032@gmail.com',
    gender: 'Male',
    password: ' ',
    img: 'assets/user.png'
  };

  constructor(private adminService: AdminService, private clientService: ClientService) {
    this.admins$ = this.adminService.getAdminData().pipe(map((admins: any[]) => admins.map((admin) => ({ ...admin, img: 'assets/user2.png' ,admin:true}))));
    this.clients$ = this.clientService.getClientData().pipe(map((clients: any[]) => clients.map((client) => ({ ...client, img: 'assets/clients.png', client:true }))));
  }
}