import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent {

  constructor(private router : Router) {}
  decoration(url : any) {
    this.router.navigate([url])
  }
}
