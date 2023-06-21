import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastEvent } from '../model/toast-event';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

  currentToasts: ToastEvent[] = [];

  constructor(private toastService: ToastService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.subscribeToToast();
  }

  subscribeToToast() {
    this.toastService.toastEvents.subscribe((toasts) => {
      const currentToasts: ToastEvent = {
        type: toasts.type,
        title: toasts.title,
        message: toasts.message,
      };
      this.currentToasts.push(currentToasts);
      this.cdr.detectChanges();
    });
  }

  dispose(index: number) {
    this.currentToasts.splice(index, 1);
    this.cdr.detectChanges();
  }
}
