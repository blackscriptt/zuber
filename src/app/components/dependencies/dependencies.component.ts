import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/shared/services/routing.service';

@Component({
  selector: 'app-dependencies',
  templateUrl: './dependencies.component.html',
  styleUrls: ['./dependencies.component.css']
})
export class DependenciesComponent implements OnInit {

  constructor(
    private routingService: RoutingService
  ) {}

  ngOnInit(): void {
    this.routingService.getUrl();
  }

}
