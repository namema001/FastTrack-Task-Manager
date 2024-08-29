import { Component, inject } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  authService: AuthService = inject(AuthService);
  title = 'angular-http-client';

  ngOnInit(){
    this.authService.autoLogin();
  }
}
