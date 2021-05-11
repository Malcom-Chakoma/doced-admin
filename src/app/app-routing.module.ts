import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/guards/auth.guard';
import { DeAuthGuard } from './helpers/guards/deAuth.guard';
import { SigninComponent } from './landing/signin/signin.component';
import { SignupComponent } from './landing/signup/signup.component';
import { DashboardComponent } from './layout/components/dashboard/dashboard.component';
import { InstitutionsComponent } from './layout/components/institutions/institutions.component';
import { PaymentsComponent } from './layout/components/payments/payments.component';
import { SettingsComponent } from './layout/components/settings/settings.component';
import { TicketsComponent } from './layout/components/tickets/tickets.component';
import { UserComponent } from './layout/components/user/user.component';
import { UsersComponent } from './layout/components/users/users.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  { path: '', component: SigninComponent,canActivate: [DeAuthGuard] },
  { path: 'signin', component: SigninComponent, canActivate: [DeAuthGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [DeAuthGuard] },
  {
    path: "layout", component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user', component: UserComponent },
      { path: 'institutions', component: InstitutionsComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'tickets', component: TicketsComponent },
      { path: 'users', component: UsersComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
