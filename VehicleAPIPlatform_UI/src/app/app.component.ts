import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VehicleAPIPlatform';
  constructor(private router: Router) {}

  isFleetOptimizationRoute(): boolean {
    return this.router.url === '/FleetOptimization';
  }

    isHomePage(): boolean {
      return this.router.url === '/';
  }
}
