import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageTemplate } from '@lab/ui';
@Component({
  selector: 'lab-home',
  standalone: true,
  imports: [PageTemplate],
  template: ` <lab-page [title]="title"> </lab-page> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  title = 'Welcome to the 🅰️ Angular v 1️⃣7️⃣ and 🐬 Nx demo project';
}
