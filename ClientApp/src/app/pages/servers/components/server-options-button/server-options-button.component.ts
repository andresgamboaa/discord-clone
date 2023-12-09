import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Input } from '@angular/core';
import { Server } from 'src/app/models/server';

@Component({
  selector: 'app-server-options-button',
  templateUrl: './server-options-button.component.html',
  styleUrls: ['./server-options-button.component.css'],
  animations: [
      trigger(
        'inOutAnimation', 
        [
          transition(
            ':enter', 
            [
              style({ opacity: 0, transform: 'translateY(-10px)' }),
              animate('0.1s ease-out', 
                     style({opacity: 1, transform: 'translateY(0px)' }))
            ]
          ),
          transition(
            ':leave', 
            [
              style({  opacity: 1 }),
              animate('0.08s ease-in', 
                     style({ opacity: 0, transform: 'translateY(-5px)' }))
            ]
          )
        ]
      )
    ]
})
export class ServerOptionsButtonComponent {
  @Input() server?: Server;
  showOptions = false;
  showInviteCode = false;
  wasInside = false;
  
  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.showOptions = false;
    }
    this.wasInside = false;
  }

  toggle() {
    this.showOptions = !this.showOptions;
  }

}
