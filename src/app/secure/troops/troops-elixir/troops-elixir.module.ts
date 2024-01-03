import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TroopsElixirRoutingModule } from './troops-elixir-routing.module';
import { TroopsElixirComponent } from './troops-elixir.component';


@NgModule({
  declarations: [
    TroopsElixirComponent
  ],
  imports: [
    CommonModule,
    TroopsElixirRoutingModule,
  ]
})
export class TroopsElixirModule { }
