import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProdactsComponent} from "./components/prodacts/prodacts.component";
import {HomeComponent} from "./components/home/home.component";
import {ProductAddComponent} from "./components/prodacts/product-add/product-add.component";
import {ProductUpdateComponent} from "./components/prodacts/product-update/product-update.component";

const routes: Routes = [
  { path: "products", component: ProdactsComponent  },
  { path: "add-products", component: ProductAddComponent  },
  { path: "update-products/:id", component: ProductUpdateComponent  },
  {  path: "home", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
