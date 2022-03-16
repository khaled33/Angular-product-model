import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Product} from "../_model/product.modal";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}/produits`);
  }

  getIsSelectedProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}/produits?selected=true`);
  }

  getIsAvailableProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}/produits?available=true`);
  }

  RechercheProduct(input: string): Observable<Product[]> {
     return this.http.get<Product[]>(`${environment.baseUrl}/produits?name_like=` + input.toString());
  }

  UpdateProduct(product: Product): Observable<Product> {
    product.selected = !product.selected;

    return this.http.put<Product>(`${environment.baseUrl}/produits/` + product.id, product);
  }

  DeleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.baseUrl}/produits/`+ id);
  }
  AddProduct(p: Product): Observable<void> {
    return this.http.post<void>(`${environment.baseUrl}/produits/`,p);
  }

  GetProductById(id:number): Observable<Product>{
    return this.http.get<Product>(`${environment.baseUrl}/produits/`+ id);

  }
}
