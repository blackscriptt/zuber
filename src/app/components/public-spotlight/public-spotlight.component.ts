import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/shared/services/routing.service';

@Component({
  selector: 'app-public-spotlight',
  templateUrl: './public-spotlight.component.html',
  styleUrls: ['./public-spotlight.component.css']
})
export class PublicSpotlightComponent implements OnInit {

  constructor(
    private routingService: RoutingService
  ) {}

  ngOnInit(): void {
    this.routingService.getUrl();
  }
}
