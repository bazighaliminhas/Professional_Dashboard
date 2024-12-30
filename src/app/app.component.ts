import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isLoginPage: boolean = false;

  constructor(private router: Router) {
    // Listen to route changes to determine if the login page is active
    this.router.events.subscribe(() => {
      this.isLoginPage = this.router.url === '/login';
    });
  }
}