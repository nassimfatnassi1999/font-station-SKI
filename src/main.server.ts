import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
const config = {
    providers: [
      provideRouter(routes) // Ajoutez le routeur ici
    ]
  };
const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
