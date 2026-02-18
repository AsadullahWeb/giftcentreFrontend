import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-toystab',
  templateUrl: './toystab.component.html',
  styleUrls: ['./toystab.component.css']
})
export class ToystabComponent {
 constructor(private router : Router){}
 table(url : any){
  this.router.navigate([url]);
 }
}
