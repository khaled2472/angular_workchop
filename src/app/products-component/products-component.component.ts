import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/Product';
import { CalculService } from '../services/calcul.service';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {

  title : string =  "ahmed" ; 
  listProdcut! : Product[];
  priceMax! : number ; 
  alertStock!:number;
  

    
  constructor(private serviceProduit:ProductserviceService,private serviceCalcul:CalculService) { }

  ngOnInit(): void {
    this.listProdcut=this.serviceProduit.listProduct;
    
  }
  getAlertStock(){

    this.alertStock =this.serviceCalcul.getNumberOf(this.listProdcut,'quantity', 0);

   }
  buy(i:number) {
    if(this.listProdcut[i].quantity>0)
    this.listProdcut[i].quantity--;
   }
   like(i:number) {
    this.listProdcut[i].like++;
   }


   
   searchProducts(query : string ) {
      for (let i = 0; i<this.listProdcut.length ; i++) {

      console.log();
   }
  

}
}
