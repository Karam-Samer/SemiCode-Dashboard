import { Component } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  products$!: Observable<any>;

  editProduct: any = {}

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProductData();
  }


  deleteUser() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    });

  }

  openEdit(product: any) {
    console.log(product);
    this.editProduct = { ...product };
  }

  saveChanges() {
    console.log(this.editProduct)
  }
}
