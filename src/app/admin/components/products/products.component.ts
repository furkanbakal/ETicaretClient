import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) { 
    super(spinner);
  }


  ngOnInit(): void {
   this.showSpinner(SpinnerType.BallAtom);

   this.httpClientService.get<Product[]>({
    controller: 'products'
   }).subscribe(res => console.log(res));

//    this.httpClientService.put({
//     controller: "products"},
//     {
//       id: 'a05b239f-afa7-49fb-9ce7-19fb96dbb4df',
//       name: 'Kalem Update',
//       stock: 20,
//       price: 30.5
// }).subscribe();

// this.httpClientService.delete({
//   controller: 'products',
// }, 'a05b239f-afa7-49fb-9ce7-19fb96dbb4df').subscribe();
  }

}
