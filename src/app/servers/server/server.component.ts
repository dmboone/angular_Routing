import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id']; //the plus converts the id from a string to a number, which is what it should be otherwise the link won't work
    this.server = this.serversService.getServer(1);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.server = this.serversService.getServer(+params['id']); //the plus converts the id from a string to a number, which is what it should be otherwise the link won't work
        }
      );
  }

}
