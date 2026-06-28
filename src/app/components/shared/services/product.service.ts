import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    public productData: any[] = [];
    constructor(private http: HttpClient) { }
    public getProductData(): Observable<any> {
        return this.http.get('https://semicode.tech/api/v1/dashboard/products');
    }
}
