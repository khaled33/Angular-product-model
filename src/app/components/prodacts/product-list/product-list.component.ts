import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../../_model/product.modal";
import {ActionEventProduct, appDataState, DataStateEnum, ProductActionType} from "../../../States/product.state";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 @Input() listProdact$: Observable<appDataState<Product[]>> | null = null;
  @Output()  Product_List_EventEmitter =new EventEmitter<ActionEventProduct>();
  readonly DataStateEnum = DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(prodact: Product) {
    this.Product_List_EventEmitter.emit({ProductActionType:ProductActionType.ON_SELECTE_PRODUCT,Payload:prodact})
  }

  deleteProduit(id: number) {
    this.Product_List_EventEmitter.emit({ProductActionType:ProductActionType.DELETE_PRODUCT,Payload:id})

  }

  UpdateProduit(id: number) {
    this.Product_List_EventEmitter.emit({ProductActionType:ProductActionType.UPDATE_PRODUCT,Payload:id})

  }
}
