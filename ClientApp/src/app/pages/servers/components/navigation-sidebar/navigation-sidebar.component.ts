import { Component, Input } from '@angular/core';
import { Server } from '../../../../models/server';

@Component({
  selector: 'app-navigation-sidebar',
  templateUrl: './navigation-sidebar.component.html',
  styleUrls: ['./navigation-sidebar.component.css']
})
export class NavigationSidebarComponent {
  @Input() servers: Server[] = [];
  @Input() currentServerId?: number;
}
