import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  passwordVisible: boolean = false; // To toggle password visibility
  
  constructor(private router: Router) {}

  // This method will be called when the form is submitted
  login(): void {
    // Example authentication check (replace with real logic)
    if (this.username === 'admin' && this.password === 'password') {
      // Store the username and token in localStorage
      localStorage.setItem('username', this.username);
      localStorage.setItem('userToken', 'fake-token'); // Replace with actual token from backend

      // Redirect to the dashboard
      this.router.navigate(['/page1']);
    } else {
      alert('Invalid credentials');
    }
  }

  // Method to toggle password visibility
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
}