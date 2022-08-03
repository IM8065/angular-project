import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaimsListComponent } from './components/claims-list/claims-list.component';
import { ClaimCreateComponent } from './components/claim-create/claim-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClaimViewComponent } from './components/claim-view/claim-view.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [AppComponent, ClaimsListComponent, ClaimCreateComponent, ClaimViewComponent, LoginComponent, RegisterComponent, HomepageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
