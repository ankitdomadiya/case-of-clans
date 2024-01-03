import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TroopsDarkElixirComponent } from './troops-dark-elixir.component';
import { TroopsDarkElixirRoutingModule } from './troops-dark-elixir-routing.module';



@NgModule({
  declarations: [
    TroopsDarkElixirComponent
  ],
  imports: [
    CommonModule,
    TroopsDarkElixirRoutingModule
  ]
})
export class TroopsDarkElixirModule { }
