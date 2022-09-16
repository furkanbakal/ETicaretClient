import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProduct } from 'src/app/contracts/create_product';
import { ListProduct } from 'src/app/contracts/list_product';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService: HttpClientService) { }

  createProduct(createProduct: CreateProduct, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {
    this.httpClientService.post({
      controller: 'products'
    }, createProduct)
    .subscribe(result => {
      successCallBack();
    }, (errorResponse: HttpErrorResponse) => {
      const _error: Array<{key: string, value: Array<string>}> = errorResponse.error;
      let message = ''; 
      
      _error.forEach ((v, index) => {
        v.value.forEach((_v, _index) => {
          message += `${_v}<br>`;
        });
      });
      errorCallBack(message);
    });
  }

  async getList(successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<ListProduct[]> {
    const data: Promise<ListProduct[]> = this.httpClientService.get<ListProduct[]>({
      controller: 'products'
    }).toPromise();

    data.then(d => successCallBack())
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message))

      return await data;
  }
}
