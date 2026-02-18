import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-alldata',
  templateUrl: './alldata.component.html',
  styleUrls: ['./alldata.component.css']
})
export class AlldataComponent {
myForm: FormGroup;
submittedData:any[]=[];
users: any[] = [];
constructor(private router : Router, private srv: ProductService){
  this.myForm = new FormGroup({
    name:new FormControl('',[Validators.required, Validators.minLength(3)]),
    itemname:new FormControl('',[Validators.required, Validators.minLength(3)]),
    quantity:new FormControl('',[Validators.required, Validators.minLength(1)]),
    color:new FormControl('', [Validators.required, Validators.minLength(3)]),
    adress:new FormControl('', [Validators.required, Validators.minLength(3)]),
    mobilenumber:new FormControl('', [Validators.required, Validators.minLength(11)])
  });
}
ngOnInit() {
this.submittedData =JSON.parse(localStorage.getItem('userlist') || '[]')
 this.loadUsers();
}
loadUsers() {
    this.srv.AdmindataUser().subscribe({
      next: (data: any) => {
        this.users = data;  // backend se data save ho gaya
      },
      error: (err) => {
        console.error('Error while fetching users:', err);
      }
    });
  }

onSubmit(){
  if (this.myForm.valid) {
    const data = this.myForm.value
// let submittedData = JSON.parse(localStorage.getItem('userlist') || '[]')
// submittedData.push(this.myForm.value);
// localStorage.setItem('userlist', JSON.stringify(submittedData));
// console.log('Form submitted:', this.myForm.value);
// this.srv.ClientdataUser(data).subscribe((resp:any) =>{
//   console.log(resp)
// })
this.srv.ClientdataUser(data).subscribe((resp:any) =>{
  console.log(resp)
})
this.srv.AdmindataUser().subscribe((resp:any)=>{
console.log(resp)
})

this.myForm.reset()
this.submittedData.push({
  name:data.name,
  itemname:data.itemname,
  quantity:data.quantity,
  color:data.color,
  adress:data.adress,
  mobilenumber:data.mobilenumber

});
localStorage.setItem('users',JSON.stringify(this.submittedData));
this.router.navigate(['./thanks']);
  } else{
    console.log('form is invalid')
  }
}
rotpass(url : any) {
  this.router.navigate([url])
}
}
