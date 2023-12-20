import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lab-bookings',
  standalone: true,
  imports: [CommonModule],
  template: `<p>bookings works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingsComponent {}
