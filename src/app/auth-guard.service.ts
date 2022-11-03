// remember to include your services in the app.module under providers!
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
    constructor(private authService: AuthService, // reach out to auth service
                private router: Router){}  // will need router to navigate to certain page based on authentication status
    canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.isAuthenticated()
            .then(
                (authenticated: boolean) => {
                    if(authenticated){
                        return true;
                    }
                    else{
                        this.router.navigate(['/']); // this will take us back to the home path
                        return false
                    }
                }
            );
    }

    canActivateChild( // to protect just the children of a path
    childRoute: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(childRoute, state);
    }
}