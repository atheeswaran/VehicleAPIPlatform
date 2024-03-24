import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscriptionService, CustomerService, FleetOptimizationService } from '../../services/subscriptionservice.service';

@Component({
  selector: 'app-subscription-service',
  templateUrl: './subscription-service.component.html',
  styleUrls: ['./subscription-service.component.css']
})
export class SubscriptionServiceComponent {
  telematicsAnalyticsData: any; // Variable to store TelematicsAnalytics data
  customersData: any;
  bookingForm!: FormGroup;
  subscriptionResponse!: any;
  fleetId: string = ''; // Declare endDate property and initialize it
  customerName: string = ''; // Declare endDate property and initialize it
  startDate: string = ''; // Declare endDate property and initialize it
  endDate: string = ''; // Declare endDate property and initialize it

  constructor(private formBuilder: FormBuilder, private subscriptionService: SubscriptionService,
    private fleetOptimizationService: FleetOptimizationService,
    private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadTelematicsAnalyticsData();
    this.loadCustomers();
    this.bookingForm = this.formBuilder.group({
      fleetId: ['', Validators.required],
      customerName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  loadTelematicsAnalyticsData() {
    // Call your service to fetch TelematicsAnalytics data
    this.fleetOptimizationService.getAllTelematics().subscribe(
      (data) => {
        this.telematicsAnalyticsData = data;
      },
      (error) => {
        console.error('Failed to load TelematicsAnalytics data:', error);
      }
    );
  }


  loadCustomers() {
    // Call your service to fetch Customers data
    this.customerService.getAllCustomers().subscribe(
      (data) => {
        this.customersData = data;
      },
      (error) => {
        console.error('Failed to load Customers data:', error);
      }
    );
  }

  bookFleet(): void {
    const fleetId = this.bookingForm.get('fleetId')?.value;
    const customerName = this.bookingForm.get('customerName')?.value;
    const startDate = this.bookingForm.get('startDate')?.value;
    const endDate = this.bookingForm.get('endDate')?.value;

    this.subscriptionService.bookFleet(fleetId, customerName, startDate, endDate)
      .subscribe(
        response => {
          console.log('Fleet subscribed successfully!', response);
          // Additional logic after successful booking, if needed
          this.subscriptionResponse = (response as any).data.createSubscription;
        },
        (error: any) => {
          console.error('Failed to subscribe fleet:', error);
          // Handle error
        }
      );
  }
}
