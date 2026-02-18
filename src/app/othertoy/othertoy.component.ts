import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-othertoy',
  templateUrl: './othertoy.component.html',
  styleUrls: ['./othertoy.component.css']
})
export class OthertoyComponent {
constructor(private router :Router){}
othertoy(url:any){
  this.router.navigate([url])
}
}
