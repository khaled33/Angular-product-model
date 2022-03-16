import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../../_services/products.service";
import {Product} from "../../../_model/product.modal";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  idProduct!: number;
  product_Model: Product = new Product();
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private productService: ProductsService,
              private router:Router) {
    // @ts-ignore
    this.idProduct = route.snapshot.params.id;

  }

  ngOnInit(): void {
    this.productService.GetProductById(this.idProduct).subscribe(value => {
      this.product_Model = value;

      this.formGroup = this.fb.group({
        name: [this.product_Model.name, Validators.required],
        price: [this.product_Model.price, Validators.required],
        quantity: [this.product_Model.quantity, Validators.required],
        selected: [this.product_Model.selected, Validators.required],
        available: [this.product_Model.available, Validators.required],
      })
    })

  }

  onSubmit() {
    if (confirm("Etre Vous Sur !!!")) {
      this.product_Model=this.formGroup.value;
      this.product_Model.id=this.idProduct;
      this.productService.UpdateProduct(this.product_Model).subscribe(value => {
        this.router.navigateByUrl("/products")
       })
    }
  }
}
