// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { ProductService } from '../product.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   email = '';
//   password = '';
//   errorMessage = '';

//   constructor(private service: ProductService, private router: Router) {}

//   onLogin() {
//     this.service.adminLogin({ email: this.email.trim(), password: this.password.trim() }).subscribe({
//       next: (res: any) => {
//         localStorage.setItem('token', res.token); // token save
//         this.router.navigate(['/datatable']); // login ke baad admin data page pe le jao
//       },
//       error: () => {
//         this.errorMessage = 'Invalid email or password';
//       }
//     });
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private service: ProductService, private router: Router) {}

  onLogin() {
    this.service.adminLogin({ email: this.email.trim(), password: this.password.trim() }).subscribe({
      next: (res: any) => {
        console.log("Login Response:", res);  // 👈 check in console

        if (res && res.token) {
          localStorage.setItem('token', res.token);   // ✅ JWT token save
          this.router.navigate(['/datatable']);       // ✅ redirect after login
        } else {
          this.errorMessage = 'Login failed: Token not received';
        }
      },
      error: (err) => {
        console.error("Login Error:", err);
        this.errorMessage = 'Invalid email or password';
      }
    });
  }
}
