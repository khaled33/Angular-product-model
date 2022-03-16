import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
 import {Product} from "../../../_model/product.modal";
import {ActionEventProduct, appDataState, DataStateEnum, ProductActionType} from "../../../States/product.state";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  listProdact$: Observable<appDataState<Product[]>> | null = null;
  readonly DataStateEnum = DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(prodact: Product) {

  }

  deleteProduit(id: number) {

  }

  UpdateProduit(id: number) {

  }
}
