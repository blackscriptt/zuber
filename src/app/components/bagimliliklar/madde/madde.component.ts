import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/shared/services/routing.service';

@Component({
  selector: 'app-madde',
  templateUrl: './madde.component.html',
  styleUrls: ['./madde.component.css']
})
export class MaddeComponent implements OnInit {

  constructor(
    private routingService: RoutingService
  ) {}

  ngOnInit(): void {
    this.routingService.getUrl();
  }
}
