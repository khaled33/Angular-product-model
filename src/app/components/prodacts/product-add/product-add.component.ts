import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../../_model/product.modal";
import {ProductsService} from "../../../_services/products.service";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  formGroup!: FormGroup;
  prudact: Product = new Product();

  constructor(private fb: FormBuilder, private productsService: ProductsService) {
  }

  ngOnInit(): void {

    this.formGroup = this.fb.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      quantity: ["", Validators.required],
      selected: ["", Validators.required],
      available: ["", Validators.required],
    })
  }

  onSubmit() {

    this.prudact = this.formGroup.value;
    if (this.formGroup.valid) {
      this.productsService.AddProduct(this.prudact).subscribe(value => {
        this.formGroup.reset();
      })
    }
  }
}
