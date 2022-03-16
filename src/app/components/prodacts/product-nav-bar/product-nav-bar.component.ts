import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEventProduct, ProductActionType} from "../../../States/product.state";

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {
   @Output()  NavBar_Product_EventEmitter =new EventEmitter<ActionEventProduct>();
  constructor() { }

  ngOnInit(): void {
  }

    onGetAll() {
      this.NavBar_Product_EventEmitter.emit({ProductActionType:ProductActionType.GET_ALL_PRODUCT })
     }

  onGetSelected() {

    this.NavBar_Product_EventEmitter.emit({ProductActionType:ProductActionType.GET_SELECTED_PRODUCT })

  }

  onGetAvalaible() {

    this.NavBar_Product_EventEmitter.emit({ProductActionType:ProductActionType.GET_AVALAIBLE_PRODUCT })

  }

  search(name:string) {


    this.NavBar_Product_EventEmitter.emit({ProductActionType:ProductActionType.SEARSH_PRODUCT,Payload:name})
  }
}
