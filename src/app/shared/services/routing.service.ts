import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  isUrl: boolean = true;

  constructor(
    private location: Location, 
    private router: Router,
  ) { }


   getUrl(): void {
    this.router.events
    .pipe(first())
    .subscribe({
      next: () => {
        if(this.location.path() == '') {
          this.isUrl = false;
        }
        else {
          this.isUrl = true;
        }
      }
    });
   }
  
}
