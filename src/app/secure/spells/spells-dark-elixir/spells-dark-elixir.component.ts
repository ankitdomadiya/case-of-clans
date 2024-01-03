import { Component } from '@angular/core';

@Component({
  selector: 'app-spells-dark-elixir',
  templateUrl: './spells-dark-elixir.component.html',
  styleUrls: ['./spells-dark-elixir.component.scss']
})
export class SpellsDarkElixirComponent {
  routerLinks = [
    { link: 'poisen' },
    { link: 'earthquake' },
    { link: 'haste' },
    { link: 'skeleton' },
    { link: 'bat' },
  ]
}
