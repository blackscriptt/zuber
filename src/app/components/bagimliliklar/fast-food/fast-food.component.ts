import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/shared/services/routing.service';

@Component({
  selector: 'app-fast-food',
  templateUrl: './fast-food.component.html',
  styleUrls: ['./fast-food.component.css']
})
export class FastFoodComponent implements OnInit {

  constructor(
    private routingService: RoutingService
  ) {}

  ngOnInit(): void {
    this.routingService.getUrl();
  }
}
