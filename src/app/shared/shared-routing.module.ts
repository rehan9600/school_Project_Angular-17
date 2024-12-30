import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent }, // Ensure this route exists
  // Add other routes here
  { path: '', redirectTo: '/navbar', pathMatch: 'full' }, // Optional: Default route
  { path: '**', redirectTo: '/navbar' }, // Optional: Catch-all route for unknown paths
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
