// dummy service but in a real application this file may reach out to a server, check authentication state
// and allow us to login or logout 
// remember to include your services in the app.module under providers!

export class AuthService{
    loggedIn = false;

    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 800);
            }
        );
        return promise;
    }
    login(){
        this.loggedIn = true;
    }
    logout(){
        this.loggedIn = false;
    }
}