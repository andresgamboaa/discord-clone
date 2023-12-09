import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-initial-modal',
  templateUrl: './initial-modal.component.html',
  styleUrls: ['./initial-modal.component.css']
})
export class InitialModalComponent {
  @Input() open = false;
}
