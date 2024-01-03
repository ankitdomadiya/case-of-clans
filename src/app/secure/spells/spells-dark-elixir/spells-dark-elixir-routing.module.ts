import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoisonComponent } from './poison/poison.component';
import { EarthquakeComponent } from './earthquake/earthquake.component';
import { HasteComponent } from './haste/haste.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { BatComponent } from './bat/bat.component';

const routes: Routes = [
  {path: '', redirectTo:'poisen', pathMatch:'full'},
  {path: 'poisen', component:PoisonComponent},
  {path: 'earthquake', component:EarthquakeComponent},
  {path: 'haste', component:HasteComponent},
  {path: 'skeleton', component:SkeletonComponent},
  {path: 'bat', component:BatComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpellsDarkElixirRoutingModule { }
