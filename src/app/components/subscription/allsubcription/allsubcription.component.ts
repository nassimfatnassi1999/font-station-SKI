import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubcriptionService } from '../../../service/subcription/subcription.service';
import { Subscription } from '../../../models/subscription';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-allsubcription',
  standalone: true,
  providers: [SubcriptionService], 
  imports: [RouterModule,HttpClientModule,CommonModule],
 
  templateUrl: './allsubcription.component.html',
  styleUrl: './allsubcription.component.css'
})
export class AllsubcriptionComponent  {
  subscriptions: Subscription[] = [];

  constructor(private  subscriptionService: SubcriptionService ,@Inject(PLATFORM_ID) private platformId: Object // Inject as Object, not PLATFORM_ID
) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)){
      this.getALL()

    }
  
    
  }
  getALL(){
    
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
