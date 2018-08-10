import { Component, HostListener, ElementRef } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'content4',
  templateUrl: './content4.component.html',
  styleUrls: ['./content4.component.css'],

  animations: [
    trigger('scrollAnimation3', [
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
export class Content4Component {
  state3 = 'hide'

  constructor(public el: ElementRef) { }
  @HostListener('window:scroll', ['$event'])
    checkScroll() {

      const componentPosition3 = this.el.nativeElement.offsetTop
      const scrollPosition3 = window.pageYOffset

      if (scrollPosition3 < componentPosition3) {
        this.state3 = 'show'
      } else {
      
      }

    }


}
