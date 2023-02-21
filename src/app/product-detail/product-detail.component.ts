import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../core/model/Product';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
id! : number ; 
list!:Product[]
  constructor(private route  : ActivatedRoute,private serviceProduit:ProductserviceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.list=this.serviceProduit.listProduct;
  }

}
