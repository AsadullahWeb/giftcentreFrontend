import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-passworddata',
  templateUrl: './passworddata.component.html',
  styleUrls: ['./passworddata.component.css']
})
export class PassworddataComponent {
myForm:FormGroup;
constructor(private router: Router){
  this.myForm = new FormGroup({
    password:new FormControl('142006', [Validators.required, Validators.minLength(6)])
  })
}

onSubmit(){
  if(this.myForm.valid){
    console.log(this.myForm.value)
this.myForm.reset();
  } else{
    console.log('form is invalid');
    
  }
}
passrot(url : any){
this.router.navigate([url])
}


}
