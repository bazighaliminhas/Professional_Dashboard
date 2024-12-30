import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';  // Use provideHttpClient instead of HttpClientModule

// Angular Material Imports
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';  // Import the MatProgressSpinnerModule

// Components
import { Page1Component } from './Pages/page1/page1.component';
import { Page2Component } from './Pages/page2/page2.component';
import { Page3Component } from './Pages/page3/page3.component';
import { Page4Component } from './Pages/page4/page4.component';
import { LoginComponent } from './Pages/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    LoginComponent,
    DashboardComponent,
    ProductDetailsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  // Essential for Material components
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressSpinnerModule,
    CommonModule
  ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync(),  // Add this line to configure HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }