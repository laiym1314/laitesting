import { Component, HostListener, ElementRef } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.css'],

  animations: [
    trigger('scrollAnimation1', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('800ms ease-out')),
      transition('hide => show', animate('900ms ease-in'))
    ])
  ]
})
export class Content2Component {
  state1 = 'hide'

  constructor(public el: ElementRef) { }
  @HostListener('window:scroll', ['$event'])
    checkScroll() {
  
      const componentPosition1 = this.el.nativeElement.offsetTop
      const scrollPosition1 = window.pageYOffset

      if (scrollPosition1 < componentPosition1) {
        this.state1 = 'show'
      } else {

      }

    }


}
