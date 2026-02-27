import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-othertoy',
  templateUrl: './othertoy.component.html',
  styleUrls: ['./othertoy.component.css']
})
export class OthertoyComponent {
  toys = [
  { img: '../../assets/lcd tab.jpeg', name: 'LCD Tab', about: 'Fun writing & drawing pad for kids. Eco-friendly, lightweight and reusable.', price: 900 },
  { img: '../../assets/dance rebot.jpeg', name: 'Dance Robot', about: 'Interactive robot with lights & music. Perfect for fun dancing moments.', price: 1400 },
  { img: '../../assets/dinasor.jpeg', name: 'Dinosaur Toy', about: 'Realistic dinosaur toy with sound & movement. Brings adventure to playtime.', price: 800 },
  { img: '../../assets/money gun.jpeg', name: 'Money Gun', about: 'Cool toy gun that shoots play money. Fun choice for parties and games.', price: 1100 },
  { img: '../../assets/pj mask slide.jpeg', name: 'PJ Mask Slide', about: 'Exciting PJ Mask themed slide toy. Keeps kids active and entertained.', price: 700 },
  { img: '../../assets/super hero collection.jpeg', name: 'Super Hero Collection', about: 'Set of action heroes for endless role-play fun. Perfect for little fans.', price: 600 },
  { img: '../../assets/reccue.jpeg', name: 'Fire Rescue Toy', about: 'Rescue vehicle toy with realistic details. Inspires bravery and adventure.', price: 900 },
  { img: '../../assets/racing car.jpeg', name: 'Racing Car Toy', about: 'Fast and stylish racing car. Perfect for exciting track competitions.', price: 1500 },
  { img: '../../assets/spray raek car.jpeg', name: 'Spray Rock Crawler', about: 'Unique crawler car with spray effect. Fun, durable and eye-catching.', price: 1200 },
  { img: '../../assets/remote control car.jpeg', name: 'Remote Control Car', about: 'High-speed RC car with smooth control. Kids’ favorite racing companion.', price: 1600 },
  { img: '../../assets/gear plane.jpeg', name: 'Gear Plane Toy', about: '360° rotating plane with lights & gears. Fun, colorful and exciting.', price: 999 },
  { img: '../../assets/police super toy.jpeg', name: 'Police Super Toy', about: 'Stylish stunt police car with lights. A perfect action toy for kids.', price: 1100 },
  { img: '../../assets/racing control.jpeg', name: 'Racing Control Car', about: 'Remote control racing car with high speed. Durable and stylish design.', price: 1600 },
  { img: '../../assets/dinasaur elctric track.jpeg', name: 'Dinosaur Electric Track', about: 'Electric dinosaur track with lights & sounds. Improves kids’ creativity.', price: 900 },
  { img: '../../assets/projection flash light.jpeg', name: 'Projection Flash Light', about: 'Cool projector light with dino, bird & ocean images. Perfect bedtime toy.', price: 600 },
  { img: '../../assets/bubblegun.jpeg', name: 'Bubble Gun', about: 'Automatic bubble gun with strong build. Fun outdoor toy for kids.', price: 1100 },
  { img: '../../assets/dolphin.jpeg', name: 'Gear Dolphin Toy', about: 'Transparent dolphin toy with gear movement, lights & music.', price: 1000 }
];
constructor(private router :Router){}
othertoy(url:any){
  this.router.navigate([url])
}
}
