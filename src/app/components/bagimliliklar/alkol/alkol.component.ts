import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/shared/services/routing.service';

@Component({
  selector: 'app-alkol',
  templateUrl: './alkol.component.html',
  styleUrls: ['./alkol.component.css']
})
export class AlkolComponent implements OnInit {

  constructor(
    private routingService: RoutingService
  ) {}

  ngOnInit(): void {
    this.routingService.getUrl();
  }
}
