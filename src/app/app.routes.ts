import { RouterModule, Routes } from '@angular/router';
import { AllPisteComponent } from './components/piste/all-piste/all-piste.component';
import { AllSkieurComponent } from './components/skieur/all-skieur/all-skieur.component';
import { AllcourseComponent } from './components/course/allcourse/allcourse.component';
import { AllinsctructorComponent } from './components/instructor/allinsctructor/allinsctructor.component';
import { AddSkieurComponent } from './components/skieur/add-skieur/add-skieur.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { AllsubcriptionComponent } from './components/subscription/allsubcription/allsubcription.component';
import { AddsubcriptionComponent } from './components/subscription/addsubcription/addsubcription.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    { path: 'home', component: HomeComponent },
    {path:'Piste', component:AllPisteComponent},
    {path:'Skier', component:AllSkieurComponent},
    {path:'Course', component:AllcourseComponent},
    {path:'Insctructor', component:AllinsctructorComponent},
    {path:'addSkier', component:AddSkieurComponent},
    {path:'subscription', component:AllsubcriptionComponent},
    {path:'addsubscription', component:AddsubcriptionComponent}

    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}