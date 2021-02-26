import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, CarouselComponent, CartComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HeaderComponent, FooterComponent, CarouselComponent]
})
export class SharedModule { }
