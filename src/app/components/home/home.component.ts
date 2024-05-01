import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/shared/services/routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(
    public routingService: RoutingService
  ) {}

  ngOnInit(): void {

    this.routingService.getUrl();
   

    eval(`
    var swiper = new Swiper(".swiper-blog", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: ".right_arrow",
        prevEl: ".left_arrow",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        580: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        875: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }
    });

    var swiper = new Swiper(".swiper-yesilayvideo", {
      slidesPerView: 1,
      spaceBetween: 8,
      autoplay: {
        delay: 8000,
        disableOnInteraction: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        300: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        400: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        580: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        875: {
          slidesPerView: 5,
          spaceBetween: 12,
        },
      }
    });
    `);
  }


}
