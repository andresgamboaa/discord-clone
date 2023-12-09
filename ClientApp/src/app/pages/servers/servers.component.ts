import { Component, OnInit } from '@angular/core';
import { ServersService } from '../../services/servers.service';
import { Server} from '../../models/server';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  host: {
    class: "w-full h-screen overflow-hidden flex m-0 p-0"
  }
})
export class ServersComponent implements OnInit {
  servers: Server[] = [];
  currentServer?: Server;
  showCreateServerModal = false;

  constructor(
    private serversService: ServersService, 
    private router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.serversService.getServers().subscribe((data) => {
      this.servers = data;

      let firstServer = this.servers.at(0);
      // If the user is not a member of any server, show a form to create one.
      if (!firstServer) {
        this.showCreateServerModal = true;
        return
      }

      let firstChannel = firstServer.channels.at(0);
      if (firstChannel) 
        this.router.navigate(["servers", firstServer.id, 'channels', firstChannel.id]);
      else
        this.router.navigate(["servers", firstServer.id]);
    })

    this.route.params.subscribe(params => console.log(params))

    this.route.paramMap.subscribe(params => {
      console.log("route changed")
      let serverId = params.get('serverId');
      if (!serverId) return;

      this.currentServer = this.servers.find(s => s.id === parseInt(serverId!));
      if (!this.currentServer) return; //TODO: handle servers that don't exist.

      let channelId = params.get('channelId');
      if (!channelId) {
        let firstChannel = this.currentServer.channels.at(0);
        if (firstChannel) {
          this.router.navigate(["servers", this.currentServer.id, 'channels', firstChannel.id]);
          return;
        }
        this.router.navigate(["servers", this.currentServer.id, 'channels']);
        return;
      }

      let channel = this.currentServer.channels.find(c => c.id == channelId);
      if (channel) {
        this.router.navigate(["servers", serverId, 'channels', channelId]);
        return;
      } // TODO: handle channels thad don't exist.

    });
  }
}
