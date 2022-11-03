import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { } // inject the router and auth service

  ngOnInit() {
  }

  onLoadServer(id: number){
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'}); // allows us to navigate to the servers route within a method
    // the slash gives us an absolute path
  }

  onLogin(){
    this.authService.login();
    alert('logged in. can now access child servers');
  }

  onLogout(){
    this.authService.logout();
    alert('logged out. cannot access child servers');
  }
}
