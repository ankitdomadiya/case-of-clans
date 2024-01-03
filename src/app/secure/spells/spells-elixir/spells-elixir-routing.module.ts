import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LightningComponent } from './lightning/lightning.component';
import { HealingComponent } from './healing/healing.component';
import { RageComponent } from './rage/rage.component';
import { JumpComponent } from './jump/jump.component';
import { FreezeComponent } from './freeze/freeze.component';
import { CloneComponent } from './clone/clone.component';
import { InvisiblityComponent } from './invisiblity/invisiblity.component';
import { RecallComponent } from './recall/recall.component';

const routes: Routes = [
  {path: '', redirectTo:'lightning', pathMatch:'full'},
  { path: 'lightning', component: LightningComponent },
  { path: 'healing', component: HealingComponent },
  { path: 'rage', component: RageComponent },
  { path: 'jump', component: JumpComponent },
  { path: 'freeze', component: FreezeComponent },
  { path: 'clone', component: CloneComponent },
  { path: 'invisiblity', component: InvisiblityComponent },
  { path: 'recall', component: RecallComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpellsElixirRoutingModule { }
