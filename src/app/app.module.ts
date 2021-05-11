import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LayoutComponent } from './layout/layout.component';
import { SigninComponent } from './landing/signin/signin.component';
import { SignupComponent } from './landing/signup/signup.component';
import { SubscriptionsComponent } from './layout/components/settings/components/subscriptions/subscriptions.component';
import { MedicalAidComponent } from './layout/components/settings/components/medical-aid/medical-aid.component';
import { ProceduresComponent } from './layout/components/settings/components/procedures/procedures.component';
import { SpecialisationsComponent } from './layout/components/settings/components/specialisations/specialisations.component';
import { SettingsComponent } from './layout/components/settings/settings.component';
import { UsersComponent } from './layout/components/users/users.component';
import { InstitutionsComponent } from './layout/components/institutions/institutions.component';
import { PaymentsComponent } from './layout/components/payments/payments.component';
import { DashboardComponent } from './layout/components/dashboard/dashboard.component';
import { TicketsComponent } from './layout/components/tickets/tickets.component';
import { AddSubscriptionComponent } from './layout/components/settings/components/subscriptions/components/add-subscription/add-subscription.component';
import { ViewSubscriptionComponent } from './layout/components/settings/components/subscriptions/components/view-subscription/view-subscription.component';
import { MatSelectModule } from '@angular/material/select';
import { AddMedicalAidComponent } from './layout/components/settings/components/medical-aid/components/add-medical-aid/add-medical-aid.component';
import { ViewMedicalAidComponent } from './layout/components/settings/components/medical-aid/components/view-medical-aid/view-medical-aid.component';
import { AddSpecialisationsComponent } from './layout/components/settings/components/specialisations/components/add-specialisations/add-specialisations.component';
import { ViewSpecialisationsComponent } from './layout/components/settings/components/specialisations/components/view-specialisations/view-specialisations.component';
import { AddProcedureComponent } from './layout/components/settings/components/procedures/components/add-procedure/add-procedure.component';
import { ViewProcedureComponent } from './layout/components/settings/components/procedures/components/view-procedure/view-procedure.component';
import { AddUserComponent } from './layout/components/users/components/add-user/add-user.component';
import { ViewUserComponent } from './layout/components/users/components/view-user/view-user.component';
import { HospitalsComponent } from './layout/components/settings/components/hospitals/hospitals.component';
import { AddHospitalComponent } from './layout/components/settings/components/hospitals/components/add-hospital/add-hospital.component';
import { ViewHospitalComponent } from './layout/components/settings/components/hospitals/components/view-hospital/view-hospital.component';
import { ViewInstitutionsComponent } from './layout/components/institutions/components/view-institutions/view-institutions.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddTicketComponent } from './layout/components/tickets/components/add-ticket/add-ticket.component';
import { ViewTicketComponent } from './layout/components/tickets/components/view-ticket/view-ticket.component';
import { UserComponent } from './layout/components/user/user.component';
import { AddDoctorComponent } from './layout/components/user/components/doctors/components/add-doctor/add-doctor.component';
import { ViewDoctorsComponent } from './layout/components/user/components/doctors/components/view-doctors/view-doctors.component';
import { DataclerksComponent } from './layout/components/user/components/dataclerks/dataclerks.component';
import { AdminsComponent } from './layout/components/user/components/admins/admins.component';
import { DoctorsComponent } from './layout/components/user/components/doctors/doctors.component';
import { AddDataclerksComponent } from './layout/components/user/components/dataclerks/components/add-dataclerks/add-dataclerks.component';
import { ViewDataclerksComponent } from './layout/components/user/components/dataclerks/components/view-dataclerks/view-dataclerks.component';
import { ChangeInstitutionComponent } from './layout/components/user/components/dataclerks/components/change-institution/change-institution.component';
import { AddPaymentComponent } from './layout/components/payments/components/add-payment/add-payment.component';
import { ViewPaymentComponent } from './layout/components/payments/components/view-payment/view-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SigninComponent,
    SignupComponent,
    SubscriptionsComponent,
    MedicalAidComponent,
    ProceduresComponent,
    SpecialisationsComponent,
    SettingsComponent,
    UsersComponent,
    InstitutionsComponent,
    PaymentsComponent,
    DashboardComponent,
    DataclerksComponent,
    AdminsComponent,
    DoctorsComponent,
    TicketsComponent,
    AddSubscriptionComponent,
    ViewSubscriptionComponent,
    AddMedicalAidComponent,
    ViewMedicalAidComponent,
    AddSpecialisationsComponent,
    ViewSpecialisationsComponent,
    AddProcedureComponent,
    ViewProcedureComponent,
    AddUserComponent,
    ViewUserComponent,
    HospitalsComponent,
    AddHospitalComponent,
    ViewHospitalComponent,
    ViewDoctorsComponent,
    ViewInstitutionsComponent,
    AddTicketComponent,
    ViewTicketComponent,
    UserComponent,
    AddDoctorComponent,
    AddDataclerksComponent,
    ViewDataclerksComponent,
    ChangeInstitutionComponent,
    AddPaymentComponent,
    ViewPaymentComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatMenuModule,
    MatPaginatorModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    LayoutModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent],
})
export class AppModule {}
