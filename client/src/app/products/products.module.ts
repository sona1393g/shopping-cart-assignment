import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PlpComponent } from './components/plp/plp.component';
import { ProductComponent } from './components/product/product.component';
import { PlpSidebarComponent } from './components/plp-sidebar/plp-sidebar.component';


@NgModule({
  declarations: [PlpComponent, ProductComponent, PlpSidebarComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
