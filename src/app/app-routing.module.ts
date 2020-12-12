import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MenuComponent } from './menu/menu.component';
import { ViewPatientDetailsComponent } from './view-patient-details/view-patient-details.component';
import { NewPatientRegistrationComponent } from './new-patient-registration/new-patient-registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/Welcome', pathMatch: 'full' },
  { path: 'Welcome', component: LoginFormComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'Admin',  component: AdminPageComponent },
  { path: 'PatientDetails', component: ViewPatientDetailsComponent },
  { path: 'NewPatient', component: NewPatientRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
