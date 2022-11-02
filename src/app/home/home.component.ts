import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { } // inject the router

  ngOnInit() {
  }

  onLoadServers(){
    this.router.navigate(['/servers']); // allows us to navigate to the servers route within a method
    // the slash gives us an absolute path
  }
}
