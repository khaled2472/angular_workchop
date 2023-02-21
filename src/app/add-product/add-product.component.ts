import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from '../core/model/Product';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product!:Product;
  constructor(private serviceProduit:ProductserviceService ,private route:Router) { }

  ngOnInit(): void {
    this.product=new Product;

  }
 ajouter(){
  this.serviceProduit.addProduct(this.product);
  this.route.navigateByUrl('/products');
 }
}
