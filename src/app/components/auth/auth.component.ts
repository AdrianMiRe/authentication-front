import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  getLoginUrl() {
    console.log('calling');
    this.authService.getMicrosoftAuthUrl()
      .subscribe( (response) => {
        console.log('URL: ', response);
        window.location.href = response.toString();
      });
  }
}
