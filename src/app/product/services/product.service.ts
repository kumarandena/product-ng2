import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Product } from '../models/product';

import {HttpClient} from '@angular/common/http';

@Injectable()
export abstract class ProductService {

  constructor() { 
    
  }
  abstract getProducts(): Observable<Product[]>;

}

@Injectable()
export class ProductWebService extends ProductService {
  constructor(private http: HttpClient){
    super();
  }
  getProducts(): Observable<Product[]>{
    return this.http
    .get<Product[]>("http://localhost:7070/api/products");

  }

}

