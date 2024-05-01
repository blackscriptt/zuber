import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/shared/services/routing.service';

@Component({
  selector: 'app-teknoloji',
  templateUrl: './teknoloji.component.html',
  styleUrls: ['./teknoloji.component.css']
})
export class TeknolojiComponent implements OnInit {

  constructor(
    private routingService: RoutingService
  ) {}

  ngOnInit(): void {
    this.routingService.getUrl();
  }
}
