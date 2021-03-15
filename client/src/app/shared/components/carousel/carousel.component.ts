import { Component, Input, OnInit } from '@angular/core';
import { Banner } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() banners: Banner[] = [];
  bannerStyle: any[] = ['block'];
  slideIndex = 1;
  baseUrl = environment.apiUrl;
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.slideIndex = this.slideIndex + 1;
      this.showSlides(this.slideIndex);
    }, 4000);
  }
  onPrevNext(slideNumber: number): void {
    this.showSlides((this.slideIndex += slideNumber));
  }
  onDotClick(currentSlideNumber: number): void {
    this.showSlides((this.slideIndex = currentSlideNumber));
  }

  private showSlides(n: number): void {
    let i;
    const dots = document.getElementsByClassName('dot');
    const totalSlides = this.banners.length;
    if (n > totalSlides) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = totalSlides;
    }
    for (i = 0; i < totalSlides; i++) {
      this.bannerStyle[i] = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    this.bannerStyle[this.slideIndex - 1] = 'block';
    if (dots[this.slideIndex - 1] && dots[this.slideIndex - 1].className) {
      dots[this.slideIndex - 1].className += ' active';
    }
  }
}
