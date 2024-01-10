import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { COLLECTOR } from '@lab/log';
import { PlatformService } from '@lab/services';
import { PageTemplate } from '@lab/ui';
@Component({
  selector: 'lab-home',
  standalone: true,
  imports: [PageTemplate],
  providers: [PlatformService],
  template: `
    <lab-page [title]="title"> Running on {{ platform }} </lab-page>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly #platformService: PlatformService = inject(PlatformService);
  title = 'Welcome to the 🅰️ Angular v 1️⃣7️⃣ and 🐬 Nx demo project';
  platform = this.#platformService.isBrowser ? 'Browser' : 'Server';
  readonly #collector = inject(COLLECTOR);
  constructor() {
    this.#collector.addMetric({
      name: 'homeComponent',
      unit: 'visits',
      value: 1,
    });
  }
}
