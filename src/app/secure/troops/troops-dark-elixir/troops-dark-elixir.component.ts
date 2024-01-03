import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-elixir',
  templateUrl: './troops-dark-elixir.component.html',
  styleUrls: ['./troops-dark-elixir.component.scss']
})
export class TroopsDarkElixirComponent {
  routerLinks = [
    {link:'minion'},
    {link:'hogrider'},
    {link:'valkyrie'},
    {link:'golem'},
    {link:'witch'},
    {link:'lavahound'},
    {link:'bowler'},
    {link:'icegolem'},
    {link:'headhunter'},
    {link:'apprenticewarder'},
  ]
}
