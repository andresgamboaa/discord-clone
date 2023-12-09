import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invite-dialog',
  templateUrl: './invite-dialog.component.html',
  styleUrls: ['./invite-dialog.component.css']
})
export class InviteDialogComponent {
  @Input() open = true;

  close() {
    this.open = false;
  }
}
