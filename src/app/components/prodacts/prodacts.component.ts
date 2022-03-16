import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../_services/products.service";
import {Product} from "../../_model/product.modal";
import {catchError, finalize, map, Observable, of, startWith} from "rxjs";
import {appDataState, DataStateEnum} from "../../States/product.state";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-prodacts',
  templateUrl: './prodacts.component.html',
  styleUrls: ['./prodacts.component.css']
})
export class ProdactsComponent implements OnInit {

  listProdact$: Observable<appDataState<Product[]>> | null = null;
  readonly DataStateEnum = DataStateEnum;

  constructor(private productService: ProductsService, private spinner: NgxSpinnerService) {

  }

  ngOnInit(): void {
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

  search(value:string) {
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

  onSelect(prodact:Product) {
     this.productService.UpdateProduct(prodact).subscribe(value => {
      })
  }

  deleteProduit(id:number) {
   let v=confirm("Etre vous Sur !!")
    if (v) {

      this.productService.DeleteProduct(id).subscribe(value => {
        this.onGetAll();
      })
    }
  }
}
