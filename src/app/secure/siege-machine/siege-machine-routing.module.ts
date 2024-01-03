import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattleBlimpComponent } from './battle-blimp/battle-blimp.component';
import { StoneSlammerComponent } from './stone-slammer/stone-slammer.component';
import { SigeBarracksComponent } from './sige-barracks/sige-barracks.component';
import { LogLauncherComponent } from './log-launcher/log-launcher.component';
import { FlameFlingerComponent } from './flame-flinger/flame-flinger.component';
import { BattleDrillComponent } from './battle-drill/battle-drill.component';
import { WallBreakerComponent } from '../troops/troops-elixir/wall-breaker/wall-breaker.component';

const routes: Routes = [
  {path: '', redirectTo:'wallbreaker',pathMatch:'full'},
  {path: 'wallbreaker', component:WallBreakerComponent},
  {path: 'battleblimp', component:BattleBlimpComponent},
  {path: 'stoneslammer', component:StoneSlammerComponent},
  {path: 'sigebarracks', component:SigeBarracksComponent},
  {path: 'loglauncher', component:LogLauncherComponent},
  {path: 'flameflinger', component:FlameFlingerComponent},
  {path: 'battledrill', component:BattleDrillComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiegeMachineRoutingModule { }
