// import { Injectable } from '@angular/core';
// import { CanActivate, Router} from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private router : Router){}
//   canActivate():boolean{
//     const isLoggedIn:any = localStorage.getItem('isLoggedIn') === 'true'
//     console.log(isLoggedIn)
//     if (isLoggedIn){
//       return true
//     } else{
//    this.router.navigate(['/login']);
//         return false;
      
//     }
//   }
  
  
// }




import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    try {
      const decoded: any = jwtDecode(token);
      const now = Date.now().valueOf() / 1000;

      // ✅ Token expired check
      if (decoded.exp && decoded.exp < now) {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        return false;
      }

      // ✅ Role check (sirf admin ko allow)
      if (decoded.role !== 'admin') {
        this.router.navigate(['/login']);
        return false;
      }

      return true;
    } catch (e) {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
