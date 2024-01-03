import { Component } from '@angular/core';

@Component({
  selector: 'app-spells-elixir',
  templateUrl: './spells-elixir.component.html',
  styleUrls: ['./spells-elixir.component.scss']
})
export class SpellsElixirComponent {
  routerLinks = [
    { link: 'lightning' },
    { link: 'healing' },
    { link: 'rage' },
    { link: 'jump' },
    { link: 'freeze' },
    { link: 'clone' },
    { link: 'invisiblity' },
    { link: 'recall' },
  ]
}
