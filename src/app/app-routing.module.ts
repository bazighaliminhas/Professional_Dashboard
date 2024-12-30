import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importing components
import { Page1Component } from './Pages/page1/page1.component';
import { Page2Component } from './Pages/page2/page2.component';
import { Page3Component } from './Pages/page3/page3.component';
import { Page4Component } from './Pages/page4/page4.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
// Importing the AuthGuard
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  // Protected routes
  { path: 'page1', component: Page1Component, canActivate: [AuthGuard] },
  { path: 'page2', component: Page2Component, canActivate: [AuthGuard] },
  { path: 'page3', component: Page3Component, canActivate: [AuthGuard] },
  { path: 'page4', component: Page4Component, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
   // Product details route with query parameter
  { path: 'product-details', component: ProductDetailsComponent, canActivate: [AuthGuard] },
  // Public route
  { path: 'login', component: LoginComponent },

  // Default route
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Wildcard route for handling 404 errors
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }