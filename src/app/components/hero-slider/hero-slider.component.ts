import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.css']
})
export class HeroSliderComponent {

  images = [
    'assets/img/one.png',
    'assets/img/two.png',
    'assets/img/third.png'
  ];

  currentIndex = 0;

  constructor() {
    setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide() {
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;
  }

  previousSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) %
      this.images.length;
  }

}

