import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    // this.errorMessage = this.route.snapshot.data['message']; // if message won't change
    this.route.data.subscribe( // if message could change
      (data: Data) => {
        this.errorMessage = data['message']
      }
    );
  }
}
