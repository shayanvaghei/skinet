import { IPagination } from './../shared/models/pagination';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brands';
import { IType } from '../shared/models/productType';
import {map} from 'rxjs/operators';
import { ShopParams } from '../shared/models/shopParams';
import { IProduct } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams){
    let params = new HttpParams();

    if (shopParams.brandId !== 0) {
      params = params.append('brandId', shopParams.brandId.toString());
    }

    if (shopParams.typeId !== 0) {
      params = params.append('typeId', shopParams.typeId.toString());
    }

    if (shopParams.search) {
      params = params.append('search', shopParams.search);
    }

    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageIndex', shopParams.pageSize.toString());
  
    
    // {observe: 'response', params} this return http response rather than body response when we get like
    // this.baseUrl + 'products/brands'   this way
    // we need to extract the response
    // returning IPagination type
    return this.http.get<IPagination>(this.baseUrl + 'products', {observe: 'response', params})
    // this pipe is a wrapper around any rxjs operator we use.
    // and inside this pipe we can chain any rxjs we can use
    // this pipe can allow to add as many rxjs operator we want such as delay
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }

  getProduct(id: number) {
    return this.http.get<IProduct>(this.baseUrl + 'products/' + id);
  }

  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
