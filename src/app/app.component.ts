import { Component } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [
  {
    type: 'success',
    message: 'успех',
  },
  {
    type: 'info',
    message: 'информация',
  },
  {
    type: 'warning',
    message: 'предупржедение!',
  },
  {
    type: 'danger',
    message: 'ошибка',
  },
  {
    type: 'primary',
    message: 'основной месседж',
  },
  {
    type: 'secondary',
    message: 'второстепенный',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  alerts: Alert[];

  constructor() {
    this.reset();
  }

  close(alert: Alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset(): void {
    this.alerts = Array.from(ALERTS);
  }
}
