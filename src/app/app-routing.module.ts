import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiegeMachineComponent } from './secure/siege-machine/siege-machine.component';
import { HerosComponent } from './secure/heros/heros.component';
import { SpellsElixirComponent } from './secure/spells/spells-elixir/spells-elixir.component';
import { SpellsDarkElixirComponent } from './secure/spells/spells-dark-elixir/spells-dark-elixir.component';
import { TroopsDarkElixirComponent } from './secure/troops/troops-dark-elixir/troops-dark-elixir.component';
import { TroopsElixirComponent } from './secure/troops/troops-elixir/troops-elixir.component';

const routes: Routes = [
  { path: '', redirectTo: 'troops-darkelixir', pathMatch: 'full' },
  { path: 'troops-elixir', loadChildren: () => import('./secure/troops/troops-elixir/troops-elixir.module').then(m => m.TroopsElixirModule), component: TroopsElixirComponent },
  { path: 'troops-darkelixir', loadChildren: () => import('./secure/troops/troops-dark-elixir/troops-dark-elixir.module').then(m => m.TroopsDarkElixirModule), component: TroopsDarkElixirComponent },
  { path: 'siege-machine', loadChildren: () => import('./secure/siege-machine/siege-machine.module').then(m => m.SiegeMachineModule), component: SiegeMachineComponent },
  { path: 'heros', loadChildren: () => import('./secure/heros/heros.module').then(m => m.HerosModule), component: HerosComponent },
  { path: 'spells-elixir', loadChildren: () => import('./secure/spells/spells-elixir/spells-elixir.module').then(m => m.SpellsElixirModule), component: SpellsElixirComponent },
  { path: 'spells-dark-elixir', loadChildren: () => import('./secure/spells/spells-dark-elixir/spells-dark-elixir.module').then(m => m.SpellsDarkElixirModule), component: SpellsDarkElixirComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
