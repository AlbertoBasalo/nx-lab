import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lab-activities',
  standalone: true,
  imports: [CommonModule],
  template: `<p>activities works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitiesComponent {}
