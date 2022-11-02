import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'], // grabs the id from the route we defined in app.module
      name: this.route.snapshot.params['name']
    };
    this.route.params
      .subscribe( // this is an observable; allows for us to asynchronously execute code in the event that something occurs; 
                  // in this case if the parameters of the route (id and name) change, so if a different id and/or name are selected
        (params: Params)=>{ // takes in the updated parameters (id and name; we defined the name of these parameters in the app module)
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }
}
