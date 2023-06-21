import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastEvent } from '../model/toast-event';
import { EventTypes } from '../model/event-types';



@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toastEvents!: Observable<ToastEvent>;
  private _toastEvents = new Subject<ToastEvent>();
  
  constructor() { 
    this.toastEvents = this._toastEvents.asObservable();
  }

  showSuccessToast(title: string, message: string) {
    this._toastEvents.next({
      message,
      title,
      type: EventTypes.Success,
    });
  }

  showInfoToast(title: string, message: string) {
    this._toastEvents.next({
      message,
      title,
      type: EventTypes.Info,
    });
  }

  showWarningToast(title: string, message: string) {
    this._toastEvents.next({
      message,
      title,
      type: EventTypes.Warning,
    });
  }

  showErrorToast(title: string, message: string) {
    this._toastEvents.next({
      message,
      title,
      type: EventTypes.Error,
    });
  }
}
