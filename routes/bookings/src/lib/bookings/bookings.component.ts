import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Signal, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Activity } from '@lab/domain';

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
        <h2>{{ activity().name }}</h2>
        <div [class]="activity().status">
          <span>{{ activity().location }}</span>
          <span>{{ activity().price | currency }}</span>
          <span>{{ activity().date | date : 'dd-MMM-yyyy' }}</span>
          <span>{{ activity().status | uppercase }}</span>
        </div>
      </header>
      <main>
        @if(remainingPlaces() > 0) {
        <label for="newBookings">How many bookings?</label>
        <input
          type="number"
          [ngModel]="newBookings()"
          (ngModelChange)="onNewBookings($event)"
          [min]="0"
          [max]="maxBookings()"
        />} @else {
        <p>No more places available</p>
        <button (click)="onNewBookings(0)">Reset</button>
        }
        <div>Current participants: {{ currentParticipants }}</div>
        <div>Participants: {{ rangeParticipation() }}</div>
        <div>Total participants: {{ totalParticipants() }}</div>
        <div>Remaining places:{{ remainingPlaces() }}</div>
        <div>New bookings: {{ newBookings() }}</div>
        <div>Amount to pay: {{ amountToPay() | currency }}</div>
      </main>
    </article>
  `,
})
export class BookingsComponent {
  activity: Signal<Activity> = signal({
    name: 'Paddle surf',
    location: 'Lake Leman at Lausanne',
    price: 100,
    date: new Date(2025, 7, 15),
    minParticipants: 4,
    maxParticipants: 10,
    status: 'published',
    id: 1,
    slug: 'paddle-surf',
    duration: 2,
    userId: 1,
  });
  currentParticipants = 3;

  newBookings = signal(0);
  maxBookings = computed(() => this.activity().maxParticipants - this.currentParticipants);
  rangeParticipation = computed(() => `${this.activity().minParticipants} - ${this.activity().maxParticipants}`);
  totalParticipants = computed(() => this.currentParticipants + this.newBookings());
  remainingPlaces = computed(() => this.activity().maxParticipants - this.totalParticipants());
  amountToPay = computed(() => this.newBookings() * this.activity().price);

  constructor() {
    effect(() => {
      if (this.totalParticipants() >= this.activity().maxParticipants) {
        this.activity().status = 'sold-out';
      } else if (this.totalParticipants() >= this.activity().minParticipants) {
        this.activity().status = 'confirmed';
      } else {
        this.activity().status = 'published';
      }
    });
  }

  onNewBookings(newBookings: number) {
    this.newBookings.set(newBookings);
  }
}
