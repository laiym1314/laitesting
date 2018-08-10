import { Component, OnInit,HostListener, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.css'],
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
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class Content1Component implements OnInit {
  state1 = 'hide'
  constructor(public el: ElementRef) { }

  
  @HostListener('window:scroll', ['$event'])
    checkScroll() {
     
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset
      if (scrollPosition > componentPosition) {
        this.state1 = 'show'
      } else {
    
      }

    }
  ngOnInit() {
  }

}
