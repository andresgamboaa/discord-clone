import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html'
})
export class DialogComponent implements OnChanges, AfterViewInit  {
  @Input() open = false;
  @ViewChild('dialog') dialog: ElementRef<HTMLDialogElement> | undefined;

  ngAfterViewInit(): void {
    if (this.open) {
      this.dialog?.nativeElement.showModal();
    }
    else {
      this.dialog?.nativeElement.close();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['open']) return; 

    if (changes.open.currentValue) {
      this.dialog?.nativeElement.showModal();
    }
    else {
      this.dialog?.nativeElement.close();
    }
  }

}