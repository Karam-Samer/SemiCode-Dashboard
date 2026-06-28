import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    public adminData: any[] = [];
    constructor(private http: HttpClient) { }
    public getAdminData(): Observable<any> {
        return this.http.get('https://semicode.tech/api/v1/dashboard/admins');
    }
}
