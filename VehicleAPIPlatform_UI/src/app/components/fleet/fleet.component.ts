// fleet.component.ts
import { Component, OnInit } from '@angular/core';
import { FleetService } from '../../services/fleet.service';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.css']
})
export class FleetComponent implements OnInit {
  fleetOverview: any;

  constructor(private fleetService: FleetService) {}

  ngOnInit(): void {
    this.loadFleetOverview();
  }

  loadFleetOverview(): void {
    this.fleetService.getFleetOverview('')
      .subscribe(
        (data) => {
          if (data) {
            this.fleetOverview = data;
          } else {
            console.log('Received null or undefined data.');
          }
        },
        (error) => console.error(error)
      );
  }
  

  // loadSubscription(): void {
  //   this.loadSubscription.getSubscription('')
  //     .subscribe(
  //       (data) => {
  //         if (data) {
  //           this.fleetOverview = data;
  //         } else {
  //           console.log('Received null or undefined data.');
  //         }
  //       },
  //       (error) => console.error(error)
  //     );
  // }
  
}
