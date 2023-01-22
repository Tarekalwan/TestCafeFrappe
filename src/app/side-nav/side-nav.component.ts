import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  isAuthenticated = false;


  constructor(private authService: AuthService) {
    this.authService.isAuthenticated.subscribe((isAuth: boolean) => this.isAuthenticated = isAuth);
  }

  ngOnInit(): void {
  }


}
