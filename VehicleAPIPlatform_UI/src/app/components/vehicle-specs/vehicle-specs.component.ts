// vehiclespecs.component.ts

import { Component, OnInit } from '@angular/core';
import { VehicleSpecificationService } from '../../services/vehicle-specs.service';


@Component({
  selector: 'app-vehiclespecs',
  templateUrl: './vehicle-specs.component.html',
  styleUrls: ['./vehicle-specs.component.css']
})
export class VehicleSpecsComponent implements OnInit {
  vehicleSpecs: any;

  constructor(private vehicleSpecsService: VehicleSpecificationService) { }

  ngOnInit(): void {
    this.getAllVehicleSpecs();
  }

  getAllVehicleSpecs(): void {
    this.vehicleSpecsService.getAllVehicleSpecs().subscribe(
      (specs) => {
        this.vehicleSpecs = specs;
      },
      (error) => {
        console.error('Error fetching vehicle specs:', error);
      }
    );
  }
}
