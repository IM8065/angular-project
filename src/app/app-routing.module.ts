import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimCreateComponent } from './components/claim-create/claim-create.component';
import { ClaimViewComponent } from './components/claim-view/claim-view.component';
import { ClaimsListComponent } from './components/claims-list/claims-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'view-claim/:id', component: ClaimViewComponent },
  { path: 'view-claims', component: ClaimsListComponent },
  { path: 'create-claim', component: ClaimCreateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homepage', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
