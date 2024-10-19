import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubcriptionService } from '../../../service/subcription/subcription.service';
import { Subscription } from '../../../models/subscription';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-allsubcription',
  standalone: true,
  imports: [RouterModule,HttpClientModule,CommonModule],
  templateUrl: './allsubcription.component.html',
  styleUrl: './allsubcription.component.css'
})
export class AllsubcriptionComponent {
  subscriptions: Subscription[] = [];

  constructor(private  subscriptionService: SubcriptionService ) {}

  ngOnInit(): void {
    // Example date range for filtering
    const startDate = '2013-10-01';
    const endDate = '2030-10-31';

    // Call the service method to retrieve subscriptions by date range
    this.subscriptionService.getSubscriptionsByDates(startDate, endDate).subscribe(
      (data: Subscription[]) => {
        this.subscriptions = data;
      },
      (error) => {
        console.error('Error fetching subscriptions:', error);
      }
    );
  }
  onEdit(num :any){

  }
  onDelete(num :any){

  }
}
