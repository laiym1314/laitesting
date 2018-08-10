import { Component, OnInit, Input,TemplateRef} from '@angular/core';
import { JsonService } from '../_services/jsonservice'
import {map, first} from 'rxjs/operators';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';



@Component({
  selector: 'pic',
  templateUrl: './pic.component.html',

})
export class PicComponent {
  picture1:object;

@Input() current;
  constructor(private jsonService: JsonService, public modalRef: BsModalRef) { }
 
  ngOnInit() {
    this.jsonService.getData().pipe(first()).subscribe(picture => {
      this.picture1 = picture;
   
    });
 
  
  }
 
  closeFirstModal=()=>{
   this.modalRef.hide()
  }

}
