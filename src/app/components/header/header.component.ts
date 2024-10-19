import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true, // Ajoutez cette ligne
  imports:[RouterModule,RouterLink,RouterOutlet]

})
export class HeaderComponent {

}
