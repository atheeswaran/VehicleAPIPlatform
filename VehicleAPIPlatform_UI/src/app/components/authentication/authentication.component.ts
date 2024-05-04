import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})

export class LoginComponent {
  username = '';
  password = '';
  loginError!: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  login(): void {
    this.authService.login(this.username, this.password)
      .subscribe(() => {
        // Redirect or perform additional actions upon successful login
        // Redirect to home page upon successful login
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Login error:', error);
        this.loginError = 'Invalid username or password. Please try again!.';
      }
    );
  }

  logout(): void {
    this.authService.logout();
  }
}
