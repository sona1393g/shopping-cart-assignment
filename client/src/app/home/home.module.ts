import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { SharedModule } from '../shared/shared.module';
import { HomeService } from './services/home.service';

@NgModule({
  declarations: [HomeComponent, CategoryComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
  providers: [HomeService],
})
export class HomeModule {}
