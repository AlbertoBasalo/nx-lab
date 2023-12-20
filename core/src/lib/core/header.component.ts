import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

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
            <a [routerLink]="['']">One route</a>
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
  @Input({ required: true }) title!: string;
  homeLink = { path: 'home', label: 'Home' };
}
