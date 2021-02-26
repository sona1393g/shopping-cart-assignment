import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlpComponent } from './components/plp/plp.component';

const routes: Routes = [
  {
    path: '',
    component: PlpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
