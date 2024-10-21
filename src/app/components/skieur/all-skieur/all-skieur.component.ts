import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SubcriptionService } from '../../../service/subcription/subcription.service';

@Component({

  selector: 'app-all-skieur',
  templateUrl: './all-skieur.component.html',
  styleUrl: './all-skieur.component.css',
  standalone: true,
  imports:[RouterModule],
  providers: [SubcriptionService], 
})
export class AllSkieurComponent {

}
