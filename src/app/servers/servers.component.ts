import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, 
              private router: Router,
              private route: ActivatedRoute) { // injects the currently active route

  }

  ngOnInit(){
    this.servers = this.serversService.getServers();
  }

  onReload(){
    this.router.navigate(['/servers'], {relativeTo: this.route}); // navigate method needs current active route as well to work if going to a different page
  }
}
