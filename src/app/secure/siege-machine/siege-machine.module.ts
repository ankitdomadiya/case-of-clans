import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiegeMachineRoutingModule } from './siege-machine-routing.module';
import { WallWreckerComponent } from './wall-wrecker/wall-wrecker.component';
import { BattleBlimpComponent } from './battle-blimp/battle-blimp.component';
import { StoneSlammerComponent } from './stone-slammer/stone-slammer.component';
import { SigeBarracksComponent } from './sige-barracks/sige-barracks.component';
import { LogLauncherComponent } from './log-launcher/log-launcher.component';
import { FlameFlingerComponent } from './flame-flinger/flame-flinger.component';
import { BattleDrillComponent } from './battle-drill/battle-drill.component';
import { SiegeMachineComponent } from './siege-machine.component';


@NgModule({
  declarations: [
    WallWreckerComponent,
    BattleBlimpComponent,
    StoneSlammerComponent,
    SigeBarracksComponent,
    LogLauncherComponent,
    FlameFlingerComponent,
    BattleDrillComponent,
    SiegeMachineComponent
  ],
  imports: [
    CommonModule,
    SiegeMachineRoutingModule
  ]
})
export class SiegeMachineModule { }
