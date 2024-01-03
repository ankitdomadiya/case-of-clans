import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpellsDarkElixirRoutingModule } from './spells-dark-elixir-routing.module';
import { SpellsDarkElixirComponent } from './spells-dark-elixir.component';


@NgModule({
  declarations: [
    SpellsDarkElixirComponent
  ],
  imports: [
    CommonModule,
    SpellsDarkElixirRoutingModule
  ]
})
export class SpellsDarkElixirModule { }
