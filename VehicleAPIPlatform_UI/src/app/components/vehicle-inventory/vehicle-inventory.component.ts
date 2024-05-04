// vehicle-inventory.component.ts
import { Component, OnInit } from '@angular/core';
import { VehicleInventoryService } from '../../services/vehicle-inventory.service';
@Component({
  selector: 'app-vehicle-inventory',
  templateUrl: './vehicle-inventory.component.html',
  styleUrls: ['./vehicle-inventory.component.css']
})
export class VehicleInventoryComponent implements OnInit {
  vehicles: any[] = [];

  constructor(private vehicleService: VehicleInventoryService) { }

  ngOnInit(): void {
    this.getAllVehicles();
  }

  getAllVehicles(): void {
    this.vehicleService.getAllVehicles().subscribe(
      (response: any) => {
        this.vehicles = response.data.getAllVehicles;
      },
      (error: any) => {
        console.error('Error fetching vehicle inventory:', error);
      }
    );
  }
}
