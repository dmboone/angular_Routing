import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'], // grabs the id from the route we defined in app.module
      name: this.route.snapshot.params['name']
    };
    this.paramsSubscription = this.route.params
      .subscribe( // this is an observable; allows for us to asynchronously execute code in the event that something occurs; 
                  // in this case if the parameters of the route (id and name) change, so if a different id and/or name are selected
        (params: Params)=>{ // takes in the updated parameters (id and name; we defined the name of these parameters in the app module)
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }

  ngOnDestroy(): void { // if you create your own observables you must do this part, but for predefined ones like .subscribe, this is actually done automatically 
                        // but this is to reference what it would look like
    this.paramsSubscription.unsubscribe();
  }
}
