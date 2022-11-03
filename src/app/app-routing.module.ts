import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [ // contains our routes to different 'pages'
  {
    path: '', // empty would mean home; localhost:4200
    component: HomeComponent
  }, 
  { 
    path: 'users', // will translate to localhost:4200/users
    component: UsersComponent, // which component.html file will be shown at this path
    children: [
      { 
        path: ':id/:name', // includes a dynamic part (:id) based on specific user
        component: UserComponent
      }
    ]
  },
  {
    path: 'servers',
    component: ServersComponent, 
    children: [
      {
        path: ':id', // since children this means servers/id
        component: ServerComponent
      },
      {
        path: ':id/edit', // since children this means servers/id/edit
        component: EditServerComponent
      }
    ]
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  // wildcard route to cover any unrecognized path; must be last path listed
  { path: '**', redirectTo: '/not-found', pathMatch: 'full'} // can redirect to other route; pathM
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes), // need to import; .forRoot registers our routes in this Angular app
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}