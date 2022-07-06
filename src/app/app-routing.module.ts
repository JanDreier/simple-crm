import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  {path: '', component: LoginComponent},

  {path: 'dashboard', component: DashboardComponent,
  ...canActivate(redirectToLogin)},

  {path: 'user', component: UserComponent,
  ...canActivate(redirectToLogin)},

  {path: 'login', component: LoginComponent,
  ...canActivate(redirectToHome)},

  {path: 'sign-up', component: SignupComponent,
  ...canActivate(redirectToHome)},

  {path: 'user/:id', component: UserDetailComponent,
  ...canActivate(redirectToLogin)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
