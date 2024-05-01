import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { RoutingService } from 'src/app/shared/services/routing.service';

@Component({
  selector: 'ly-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public routingService: RoutingService
  ) { }

  ngOnInit(): void {
    this.routingService.getUrl();
  }

}
