import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, HeaderComponent } from '@lab/core';

@Component({
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterModule],
  selector: 'lab-root',
  template: `
    <lab-header title="Activity Bookings" />
    <router-outlet />
    <lab-footer />
  `,
  styles: ``,
})
export class AppComponent {
  title = 'activity-bookings';
}
