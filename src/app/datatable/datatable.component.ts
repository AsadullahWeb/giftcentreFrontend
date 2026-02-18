import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
users:any []=[];
constructor(private src: ProductService,private fb:FormBuilder,private router: Router ){}
log(url:any){
  this.router.navigate([url]);
}
ngOnInit(){
  this.getUserlist()
}
getUserlist(){
  this.src.AdmindataUser(). subscribe((resp:any) =>{
    this.users=resp
  })
  
}
deleteUser(id:string){
 this.src.ClientdeletedataUser(id).subscribe(() =>{
  this.getUserlist();
 });
}
// logout(){
//   localStorage.setItem('isLoggedin', 'false');
//   this.router.navigate(['/home'])
// }
  logout() {
    localStorage.removeItem('token');   // ✅ Token delete
    this.router.navigate(['/home']);   // ✅ Redirect to login
  }
}
