import { Injectable } from '@angular/core';
import { TOASTER_TIMEOUT } from 'src/app/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  snackbar: any;
  constructor() {
    this.snackbar = document.getElementById('snackbar');
  }

  show(msg: string): void {
    this.snackbar = document.getElementById('snackbar');
    if (this.snackbar) {
      this.snackbar.innerHTML = msg;
      this.snackbar.classList.add('show');
      const timeout = setTimeout(() => {
        this.remove();
        clearTimeout(timeout);
      }, TOASTER_TIMEOUT);
    }
  }
  remove(): void {
    this.snackbar = document.getElementById('snackbar');
    this.snackbar.innerHTML = '';
    this.snackbar.classList.remove('show');
  }
}
