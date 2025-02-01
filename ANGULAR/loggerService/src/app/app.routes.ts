import { Routes } from '@angular/router';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventListComponent } from './components/event-list/event-list.component';

export const routes: Routes = [
  { path: 'registro', component: EventFormComponent },
  { path: 'listado', component: EventListComponent },
  { path: '', redirectTo: 'registro', pathMatch: 'full' },
  { path: '**', redirectTo: 'registro', pathMatch: 'full' }
];
