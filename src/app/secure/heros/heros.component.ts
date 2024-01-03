import { Component } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent {
  routerLinks = [
    { link: 'barbarianking' },
    { link: 'archerqueen' },
    { link: 'grandwarden' },
    { link: 'royalchampion' },
  ]
}
