import { Component } from '@angular/core';

@Component({
  selector: 'app-siege-machine',
  templateUrl: './siege-machine.component.html',
  styleUrls: ['./siege-machine.component.scss']
})
export class SiegeMachineComponent {
  routerLinks = [
    {link:'wallbreaker'},
    {link:'battleblimp'},
    {link:'stoneslammer'},
    {link:'sigebarracks'},
    {link:'loglauncher'},
    {link:'flameflinger'},
    {link:'battledrill'},
  ]
}
