import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private router:Router){}
  canLoad() {
    const isAuthenticated=!!(+localStorage.getItem('authenticated'));
    // const isAuthenticated=localStorage.getItem('authenticated')

    if(isAuthenticated){
      return true;
    } else{
      const navigation =this.router.getCurrentNavigation();
      console.log('nav:',navigation);
      let url='/';
      if(navigation){
        url=navigation.extractedUrl.toString();
      }
      this.router.navigateByUrl('/Login');
      return false;
    }
  }
}
