import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Server } from '../../../../models/server';
import { Channel, ChannelType } from '../../../../models/channel';

@Component({
  selector: 'app-server-sidebar',
  templateUrl: './server-sidebar.component.html',
  styleUrls: ['./server-sidebar.component.css']
})
export class ServerSidebarComponent implements OnChanges {
  @Input() server?: Server;
  channelsByType?: Map<string, Channel[]>;
  showOptionsMenu = false;

  toggleOptionsMenu() { this.showOptionsMenu = !this.showOptionsMenu}
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.server && this.server) {
      this.channelsByType = this.groupChannelsByType(this.server.channels);
    }
  }

  groupChannelsByType<T>(channels: Channel[]) {
    let output = new Map<string, Channel[]>();
    let types = ["Text", "Audio", "Video"] as const;

    output.set(types[0], []);
    output.set(types[1], []);
    output.set(types[2], []);

    for (let channel of channels) {
      output.get(types[channel.type])?.push(channel);
    }

    return output;
  }
}
