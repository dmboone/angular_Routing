import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [ // contains our routes to different 'pages'
  {
    path: '', // empty would mean home; localhost:4200
    component: HomeComponent
  }, 
  { 
    path: 'users', // will translate to localhost:4200/users
    component: UsersComponent // which component.html file will be shown at this path
  },
  {
    path: 'servers',
    component: ServersComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), // need to import; .forRoot registers our routes in this Angular app
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
