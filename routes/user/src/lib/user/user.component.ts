import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '@lab/auth';

@Component({
  selector: 'lab-user',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Hello {{ userName }}</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  readonly #authService = inject(AuthService);
  userName = this.#authService.getUser().username;
}
