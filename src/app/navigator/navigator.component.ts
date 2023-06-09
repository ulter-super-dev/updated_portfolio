import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

import {
  trigger,
  transition,
  style,
  group,
  query,
  animate,
  stagger,
  state,
  keyframes
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  animations: [
    trigger('slideIn', [
      transition('* => *', [
        query(':enter', style({ marginLeft: '50%', opacity: 0 }), {
          optional: true
        }),
        query(':leave', style({ marginLeft: '0%', opacity: 1 }), {
          optional: true
        }),
        query(
          ':enter',
          [
            stagger('0.2s', [
              animate(
                '0.5s ease-out',
                keyframes([
                  style({ offset: 0 }),
                  style({ marginLeft: '0%', opacity: 0.8, offset: 0.8 }),
                  style({ marginLeft: '-10%', opacity: 1, offset: 0.9 }),
                  style({ marginLeft: '0%', opacity: 1, offset: 1 })
                ])
              )
            ])
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            stagger('0.2s', [
              animate(
                '0.5s ease-in',
                keyframes([
                  style({ offset: 0 }),
                  style({ marginLeft: '10%', offset: 0.1 }),
                  style({ marginLeft: '0%', offset: 0.4 }),
                  style({ marginLeft: '-50%', opacity: 0, offset: 1 })
                ])
              )
            ])
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class NavigatorComponent implements OnInit {

  constructor(private router: Router) { }

  navLinks = [
    { displayName: 'Portfolio', url: '/portfolio' },
    { displayName: 'About & Skills', url: '/about' },
    { displayName: 'Contacts & Profiles', url: '/profiles' },
    { displayName: 'Profile Card', url: '/profile-card' }
  ];

  @Output("cancellation") cancellation = new EventEmitter()

  ngOnInit() {
  }

  onBgClick() {
    this.cancellation.emit();
  }
  onNavItemClick(e: Event, url: string) {
    e.stopPropagation();
    this.router.navigateByUrl(url);
  }

}
