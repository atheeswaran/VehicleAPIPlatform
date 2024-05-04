import { Component } from '@angular/core';
import { PaymentService } from '../../services/onine-financing.service';

@Component({
  selector: 'app-payment',
  templateUrl: './online-financing.component.html',
  styleUrls: ['./online-financing.component.css']
})
export class OnlineFinancingComponent {

  availableSubscriptions!: any;
  amount!: number;
  currency!: string;
  message: { [key: string]: string  } = {};

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.loadAvailableSubscriptions();
  }

  loadAvailableSubscriptions(): void {
    this.paymentService.getAvailableSubscriptions().subscribe(
      (subscriptions) => {
      this.availableSubscriptions = subscriptions;
    });
  }

  makePayment(id: string): void {
    this.paymentService.makePayment(this.amount, this.currency)
      .subscribe(response => {
        console.log('Payment successful:', response.data.makePayment);
        // Handle the response accordingly, e.g., show success message
        this.message[id] = response.data.makePayment;
      }, error => {
        console.error('Error making payment:', error);
        // Handle error, e.g., display error message
      });
  }
}
