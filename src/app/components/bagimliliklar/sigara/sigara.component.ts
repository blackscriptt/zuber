import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/shared/services/routing.service';

@Component({
  selector: 'app-sigara',
  templateUrl: './sigara.component.html',
  styleUrls: ['./sigara.component.css']
})
export class SigaraComponent implements OnInit {

  constructor(
    private routingService: RoutingService
  ) {}

  ngOnInit(): void {
    this.routingService.getUrl();
  }
}
