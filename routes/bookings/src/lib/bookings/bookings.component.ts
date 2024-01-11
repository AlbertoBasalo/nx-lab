import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Activity, NULL_ACTIVITY } from '@lab/domain';

@Component({
  selector: 'lab-bookings',
  standalone: true,
  styles: `
    .draft {
      color: violet;
      font-style: italic;
    }
    .published {
      color: limegreen;
    }
    .confirmed {
      color: green;
    }
    .sold-out {
      color: green;
      font-style: italic;
    }
    .done {
      color: orange;
      font-style: italic;
    }
    .cancelled {
      color: red;
      font-style: italic;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule],
  template: `
    <article>
      <header>
        <p>{{ activity.name }}</p>
        <div [class]="activity.status">
          <span>{{ activity.date | date }}</span>
          <span>{{ activity.location }}</span>
          <span>{{ activity.price | currency }}</span>
        </div>
      </header>
      <main>
        <input
          type="number"
          [ngModel]="newBookings()"
          (ngModelChange)="onNewBookings($event)"
          [min]="0"
          [max]="maxBookings()"
        />
        <div>
          Participants: {{ activity.minParticipants }} -
          {{ activity.maxParticipants }}
        </div>
        <div>Current participants: {{ currentParticipants }}</div>
        <div>New bookings: {{ newBookings() }}</div>
        <div>Total participants: {{ totalParticipants() }}</div>
        <div>
          Remaining places:
          {{ remainingPlaces() }}
        </div>
      </main>
    </article>
  `,
})
export class BookingsComponent {
  onNewBookings($event: number) {
    this.newBookings.set($event);
  }
  activity: Activity = {
    ...NULL_ACTIVITY,
    name: 'Paddle surf',
    location: 'Lake Leman',
    price: 100,
    date: new Date(2025, 7, 15),
    minParticipants: 4,
    maxParticipants: 10,
    status: 'draft',
  };
  currentParticipants = 3;
  newBookings = signal(0);
  maxBookings = computed(
    () => this.activity.maxParticipants - this.currentParticipants
  );
  totalParticipants = computed(
    () => this.currentParticipants + this.newBookings()
  );
  remainingPlaces = computed(
    () => this.activity.maxParticipants - this.totalParticipants()
  );
  constructor() {
    effect(() => {
      if (this.totalParticipants() >= this.activity.maxParticipants) {
        this.activity.status = 'sold-out';
      } else if (this.totalParticipants() >= this.activity.minParticipants) {
        this.activity.status = 'confirmed';
      } else {
        this.activity.status = 'published';
      }
    });
  }
}
