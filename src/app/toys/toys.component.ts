import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent {
constructor(private router : Router){}
routes(url :any){
this.router.navigate([url])
}
}
