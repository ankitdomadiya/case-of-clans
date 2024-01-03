import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArcherComponent } from './archer/archer.component';
import { BabyDragonComponent } from './baby-dragon/baby-dragon.component';
import { BalloonComponent } from './balloon/balloon.component';
import { BarbarianComponent } from './barbarian/barbarian.component';
import { DragonRiderComponent } from './dragon-rider/dragon-rider.component';
import { DragonComponent } from './dragon/dragon.component';
import { ElectroDragonComponent } from './electro-dragon/electro-dragon.component';
import { ElectroTitanComponent } from './electro-titan/electro-titan.component';
import { GiantComponent } from './giant/giant.component';
import { GoblinComponent } from './goblin/goblin.component';
import { HealerComponent } from './healer/healer.component';
import { MinerComponent } from './miner/miner.component';
import { PekkaComponent } from './pekka/pekka.component';
import { RootRiderComponent } from './root-rider/root-rider.component';
import { WallBreakerComponent } from './wall-breaker/wall-breaker.component';
import { WizardComponent } from './wizard/wizard.component';
import { YetiComponent } from './yeti/yeti.component';


const routes: Routes = [
  {path:'', redirectTo:'barbarian', pathMatch:'full'},
  {path: 'barbarian',component: BarbarianComponent},
  {path: 'archer',component: ArcherComponent},
  {path: 'giant',component: GiantComponent},
  {path: 'goblin',component: GoblinComponent},
  {path: 'wallbreaker',component: WallBreakerComponent},
  {path: 'balloon',component: BalloonComponent},
  {path: 'wizard',component: WizardComponent},
  {path: 'healer',component: HealerComponent},
  {path: 'dragon',component: DragonComponent},
  {path: 'pekka',component: PekkaComponent},
  {path: 'babydragon',component: BabyDragonComponent},
  {path: 'miner',component: MinerComponent},
  {path: 'electrodagon',component: ElectroDragonComponent},
  {path: 'yeti',component: YetiComponent},
  {path: 'dragonrider',component: DragonRiderComponent},
  {path: 'electrotitan',component: ElectroTitanComponent},
  {path: 'rootrider',component: RootRiderComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TroopsElixirRoutingModule { }
