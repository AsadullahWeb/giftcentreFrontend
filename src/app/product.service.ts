// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { AlldataComponent } from './alldata/alldata.component';


// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

//   private baseUrl = 'http://localhost:3000';

//   constructor(private http: HttpClient) { }
// //  ClientdataUser(body:any){
// //   return this.http.post('http://localhost:3000/clientdata', body)
// //  }
//   adminLogin(body: { email: string; password: string }) {
//     return this.http.post<{ token: string }>(`${this.baseUrl}/admin/login`, body);
//   }

//   ClientdataUser(body: any) {
//     return this.http.post(`${this.baseUrl}/clientdata`, body);
//   }
//  AdmindataUser(){
//   return this.http.get('http://localhost:3000/admindata')
//  }
//  ClientdeletedataUser(id:any){
//   return this.http.delete('http://localhost:3000/clientdeletedata'+id)
//  }


// }


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  private authHeaders() {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({
      // agar verifyToken me "Bearer " check hai to:
      Authorization: `Bearer ${token}`
      // Authorization: token
    });
  }

  // LOGIN (admin)
  adminLogin(body: { email: string; password: string }) {
    return this.http.post<{ token: string }>(`${this.baseUrl}/admin/login`, body);
  }

  // CLIENT DATA SAVE
  ClientdataUser(body: any) {
    return this.http.post(`${this.baseUrl}/clientdata`, body);
  }

  // ADMIN DATA (token required)
  AdmindataUser() {
    return this.http.get(`${this.baseUrl}/admindata`, {
      headers: this.authHeaders()
    });
  }

  // DELETE CLIENT (token required)
  ClientdeletedataUser(id: string) {
    return this.http.delete(`${this.baseUrl}/clientdeletedata/${id}`, {
      headers: this.authHeaders()
    });
  }
}

