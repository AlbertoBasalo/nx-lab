import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '@lab/auth';
import { COLLECTOR, LogLevel } from '@lab/log';

@Component({
  selector: 'lab-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ``,
  imports: [RouterLink],
  template: `
    <header>
      <nav>
        <a [routerLink]="homeLink.path">{{ homeLink.label }}</a>
        <ul>
          <li>
            <a [routerLink]="['user']">{{ userName }}</a>
          </li>
          <li>
            <a [routerLink]="['activities']">Activities</a>
          </li>
          <li>
            <a [routerLink]="['bookings']">Bookings</a>
          </li>
        </ul>
      </nav>
      <h1>{{ title }}</h1>
    </header>
  `,
})
export class HeaderComponent {
  readonly #authService = inject(AuthService);
  readonly #collector = inject(COLLECTOR);

  @Input({ required: true }) title!: string;
  homeLink = { path: '', label: 'Home' };
  userName = this.#authService.getUser().username;

  constructor() {
    this.#collector.addEvent({
      level: LogLevel.info,
      message: 'HeaderComponent created',
    });
  }
}
