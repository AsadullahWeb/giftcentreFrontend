import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanku',
  templateUrl: './thanku.component.html',
  styleUrls: ['./thanku.component.css']
})
export class ThankuComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Auto redirect after 10 seconds
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 30000); // 10000 ms = 10 sec
  }

}
