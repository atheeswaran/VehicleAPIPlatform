// collaboration.component.ts

import { Component } from '@angular/core';
import { CollaborationService } from '../../services/collab-design.service';




@Component({
  selector: 'app-collaboration',
  templateUrl: './collab-design.component.html',
  styleUrls: ['./collab-design.component.css']
})
export class CollaborationComponent {
  responses: ResponseType[] = [];
  message: any;
  updateClicked: boolean = false;
  constructor(private collaborationService: CollaborationService) { }

  ngOnInit(): void {
    this.triggerProducer();
  }

  triggerProducer(): void {
    const data = null ;
    const events = [
      { event: 'StakeholdersRetrieved', data: data },
      { event: 'CollabDesignsRetrieved', data: data },
      //{ event: 'UpdateCollabDesigns', data: data },
      // Add more events as needed
    ];
    this.collaborationService.triggerKafkaProducer(events).subscribe((response) => {
      console.log('Kafka producer triggered');

    },
    (error) => {
      console.error('Error triggering Kafka producer:', error);
    }
    
  );
  }

  isStringResponse(response: any): boolean {
    return typeof response === 'string';
  }  

  processData(): void {
    this.collaborationService.processData().subscribe(
      (responses: ResponseType[]) => {
        console.log('Response from Kafka producer', responses);
        this.responses = responses;

          // Iterate over the responses array and print each element
  for (let i = 0; i < responses.length; i++) {
    console.log('Response', i + 1, ':', responses[i]); }
      },
      (error) => {
        console.error('Error forwarding request:', error);
        // Handle errors
      }
    );
  }
  
  updateCollabDesigns(): void {
    const data = null ;
    this.updateClicked = true;
//     const events = [
//        { event: 'UpdateCollabDesigns', data: data },
//       // Add more events as needed
//     ];
//     this.collaborationService.triggerKafkaProducer(events).subscribe((response) => {
//       console.log('Kafka producer triggered');
//       console.log(response);

//     },
//     (error) => {
//       console.error('Error triggering Kafka producer:', error);
//     }
    
//   );


//   this.collaborationService.processData().subscribe(
//     (responses: ResponseType[]) => {
//       console.log('Response from Kafka producer', responses);
//       this.responses = responses;

//         // Iterate over the responses array and print each element
// for (let i = 0; i < responses.length; i++) {
//   console.log('Response', i + 1, ':', responses[i]); }
//     },
//     (error) => {
//       console.error('Error forwarding request:', error);
//       // Handle errors
//     }
//   );
     this.message = "Collab Design with id = 2 has been updated successfully!";
  }

}
