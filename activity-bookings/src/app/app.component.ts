import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@lab/core';

@Component({
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  selector: 'lab-root',
  template: `
    <lab-header title="Activity Bookings" />
    <router-outlet />
  `,
  styles: ``,
})
export class AppComponent {
  title = 'activity-bookings';
}
