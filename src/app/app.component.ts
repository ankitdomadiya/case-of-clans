import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'case_of_clans';
  routerLinks = [
    {link:'troops-elixir'},
    {link:'troops-darkelixir'},
    {link:'siege-machine'},
    {link:'heros'},
    {link:'spells-elixir'},
    {link:'spells-dark-elixir'},
  ]
}
