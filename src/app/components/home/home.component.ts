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
        nextEl: ".right1",
        prevEl: ".left1",
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

    var swiper = new Swiper(".yesilayvideo", {
      slidesPerView: 1,
      spaceBetween: 8,
      loop: true,
      autoplay: {
        delay: 9000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: ".right2",
        prevEl: ".left2",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 12,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        999: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
      }
    });
    `);
  }


}
