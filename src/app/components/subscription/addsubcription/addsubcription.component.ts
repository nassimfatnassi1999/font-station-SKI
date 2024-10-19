import { Component } from '@angular/core';
import { SubcriptionService } from '../../../service/subcription/subcription.service';
import { Subscription } from '../../../models/subscription';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addsubcription',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule,CommonModule],
  templateUrl: './addsubcription.component.html',
  styleUrl: './addsubcription.component.css'
})
export class AddsubcriptionComponent {
  subscription!: Subscription;
  subscriptionForm!: FormGroup;
  constructor(private subscriptionService: SubcriptionService , private formBuilder: FormBuilder,private rt:Router,) {}

// nheb nkolo hadharli melowel win bch nhot les données
async ngOnInit()
 {this.subscriptionForm = this.formBuilder.group({
  startDate:["", [Validators.required]],
  endDate:["",Validators.required],
  price:["",[Validators.required,]],
  typeSub:["",Validators.required]
})}

  onSubmit() {
    this.subscriptionService.addSubscription(this.subscriptionForm.value)
      .subscribe({
        next: (response) => {
          console.log('Subscription added successfully:', response);
          this.rt.navigate(["subscription"])
        },
        error: (error) => {
          console.error('There was an error adding the subscription:', error);
        }
      });
  }

}
