import { Component } from '@angular/core';

@Component({
  selector: 'app-elixir',
  templateUrl: './troops-elixir.component.html',
  styleUrls: ['./troops-elixir.component.scss']
})
export class TroopsElixirComponent {
  routerLinks = [
    {link:'barbarian'},
    {link:'archer'},
    {link:'giant'},
    {link:'goblin'},
    {link:'wallbreaker'},
    {link:'balloon'},
    {link:'wizard'},
    {link:'healer'},
    {link:'dragon'},
    {link:'pekka'},
    {link:'miner'},
    {link:'electrodagon'},
    {link:'yeti'},
    {link:'electrotitan'},
    {link:'rootrider'},
  ]
}
