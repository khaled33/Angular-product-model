import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../_services/products.service";
import {Product} from "../../_model/product.modal";
import {catchError, finalize, map, Observable, of, startWith} from "rxjs";
import {ActionEventProduct, appDataState, DataStateEnum, ProductActionType} from "../../States/product.state";
import {NgxSpinnerService} from "ngx-spinner";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-prodacts',
  templateUrl: './prodacts.component.html',
  styleUrls: ['./prodacts.component.css']
})
export class ProdactsComponent implements OnInit {

  listProdact$: Observable<appDataState<Product[]>> | null = null;
  readonly DataStateEnum = DataStateEnum;

  constructor(private productService: ProductsService,
              private spinner: NgxSpinnerService,
              private rout: Router) {

  }

  ngOnInit(): void {
  }

  OnActionEvent($event: ActionEventProduct) {
    switch ($event.ProductActionType) {
      case  ProductActionType.GET_ALL_PRODUCT : {
        this.onGetAll();
        break;
      }
      case  ProductActionType.GET_SELECTED_PRODUCT: {
        this.onGetSelected();
        break;
      }
      case  ProductActionType.GET_AVALAIBLE_PRODUCT: {
        this.onGetAvalaible();
        break;
      }
      case  ProductActionType.SEARSH_PRODUCT: {
        this.search($event.Payload);
        break;
      }
      case  ProductActionType.ON_SELECTE_PRODUCT: {
        this.onSelect($event.Payload);
        break;
      }
      case  ProductActionType.DELETE_PRODUCT: {
        this.deleteProduit($event.Payload);
        break;
      }
      case  ProductActionType.UPDATE_PRODUCT: {
        this.UpdateProduit($event.Payload);
        break;
      }
    }

  }


  onGetAvalaible() {
    this.listProdact$ = null;
    // @ts-ignore
    this.listProdact$ = this.productService.getIsAvailableProduct().pipe(
      map(data => {
          this.spinner.hide()
          return ({data: data, dataState: DataStateEnum.LOADING})
        }
      ),
      startWith(
        this.spinner.show(),
        ({dataState: DataStateEnum.LOADED})
      ),
      catchError((err, caught) => of({dataState: DataStateEnum.ERROR, errorMessage: err.message})),
      finalize(() => {
        this.spinner.hide()

      })
    );
  }

  onGetSelected() {
    this.listProdact$ = null;

    // @ts-ignore
    this.listProdact$ = this.productService.getIsSelectedProduct().pipe(
      map(data => {
          this.spinner.hide()
          return ({data: data, dataState: DataStateEnum.LOADING})
        }
      ),
      startWith(
        this.spinner.show(),
        ({dataState: DataStateEnum.LOADED})
      ),
      catchError((err, caught) => of({dataState: DataStateEnum.ERROR, errorMessage: err.message})),
      finalize(() => {
        this.spinner.hide()

      })
    );
  }

  onGetAll() {
    // @ts-ignore
    this.listProdact$ = this.productService.getAllProduct().pipe(
      map(data => {
          this.spinner.hide()
          return ({data: data, dataState: DataStateEnum.LOADING})
        }
      ),
      startWith(
        this.spinner.show(),
        ({dataState: DataStateEnum.LOADED})
      ),
      catchError((err, caught) => of({dataState: DataStateEnum.ERROR, errorMessage: err.message})),
      finalize(() => {
        this.spinner.hide()

      })
    );
  }

  search(value: string) {
    // @ts-ignore
    this.listProdact$ = this.productService.RechercheProduct(value).pipe(
      map(data => {
          this.spinner.hide()
          return ({data: data, dataState: DataStateEnum.LOADING})
        }
      ),
      startWith(
        this.spinner.show(),
        ({dataState: DataStateEnum.LOADED})
      ),
      catchError((err, caught) => of({dataState: DataStateEnum.ERROR, errorMessage: err.message})),
      finalize(() => {
        this.spinner.hide()

      })
    );
  }

  onSelect(prodact: Product) {
    this.productService.UpdateProduct(prodact).subscribe(value => {
    })
  }

  deleteProduit(id: number) {
    let v = confirm("Etre vous Sur !!")
    if (v) {

      this.productService.DeleteProduct(id).subscribe(value => {
        this.onGetAll();
      })
    }
  }

  UpdateProduit(id: number) {
    this.rout.navigateByUrl("update-products/" + id);
  }

}
