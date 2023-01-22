import { Component } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestCafefrappe';
  isAuthenticated = false;

  constructor(private authService: AuthService){
    this.authService.isAuthenticated.subscribe((isAuth: boolean) => this.isAuthenticated = isAuth);
  }

}
