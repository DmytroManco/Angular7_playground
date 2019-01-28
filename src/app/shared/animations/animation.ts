import {
  trigger, transition, animate, style
} from '@angular/animations';

export const slideIn = trigger('slideIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('.5s', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('.2s', style({ opacity: 0 }))
  ])
]);
