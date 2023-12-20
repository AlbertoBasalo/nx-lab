import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '@lab/auth';
import { LoggerService } from '@lab/log';

@Component({
  selector: 'lab-header',
  standalone: true,
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
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly #authService = inject(AuthService);

  @Input({ required: true }) title!: string;
  homeLink = { path: '', label: 'Home' };
  userName = this.#authService.getUser().username;

  constructor(logger: LoggerService) {
    logger.log('Starting HeaderComponent');
  }
}
