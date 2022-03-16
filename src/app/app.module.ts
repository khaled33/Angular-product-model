import {NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {ProdactsComponent} from './components/prodacts/prodacts.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
// Import library module
import {NgxSpinnerModule} from "ngx-spinner";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductAddComponent } from './components/prodacts/product-add/product-add.component';
import { ProductUpdateComponent } from './components/prodacts/product-update/product-update.component';
import { ProductNavBarComponent } from './components/prodacts/product-nav-bar/product-nav-bar.component';
import { ProductListComponent } from './components/prodacts/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProdactsComponent,
    HomeComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    ProductNavBarComponent,
    ProductListComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule, BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
