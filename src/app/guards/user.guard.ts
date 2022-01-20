import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private token:TokenStorageService, private router: Router){}

  /*=============================================
    Utilizo canActivate para protejer el enrrutamiento 
    y utilizo map en vez de subscribe porque necesito devolver un observable
  =============================================*/
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {
    const user = window.sessionStorage.getItem(USER_KEY);
    console.log('user', user);  
    if (user) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    } 
  }

}

  