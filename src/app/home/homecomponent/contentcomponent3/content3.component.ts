import { Component, HostListener, ElementRef } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'content3',
  templateUrl: './content3.component.html',
  styleUrls: ['./content3.component.css'],
  animations: [
    trigger('scrollAnimation2', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class Content3Component {

  state2 = 'hide'

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
  
      const componentPosition2 = this.el.nativeElement.offsetTop
      const scrollPosition2 = window.pageYOffset

      if (scrollPosition2 < componentPosition2) {
        this.state2 = 'show'
      } else {
    
      }

    }

}