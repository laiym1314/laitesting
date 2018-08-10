import { Component, OnInit,TemplateRef,Injectable, Input} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {map, first} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PicComponent } from '../picture/pic.component'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Http} from '@angular/http';
import { Observable } from 'rxjs';
import { JsonService } from '../_services/jsonservice'
import { Picture } from '../_modal/picture';
@Injectable()

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
 
})
export class ProjectComponent implements OnInit {
  images: Array<string>;
  modalRef: BsModalRef;
  picture1: Picture[] = [];
  show:number;
  @Input()add;

  constructor( private jsonService: JsonService,private service:JsonService,private http:Http,config:NgbCarouselConfig, private _http: HttpClient,private modalService: BsModalService,) 
  {  
    this.show=3;
    this.add=3
   }

  

  ngOnInit() {


    this.jsonService.getData().pipe(first()).subscribe(picture => {
      this.picture1 = picture;

    });
 
  }

content:any[]=new Array();
  counter:number;
  displaydata(data) {this.picture1 = data;}
  getData(){
    let content = [...this.content];
    console.log(this.counter+this.picture1.length)
    for(let i=this.counter+1;i<this.picture1.length;i++) {
      content.push(this.picture1[i]);
      if(i%3==0) break;
    }
    this.content = content;
    debugger
    console.log(content)
    this.counter+=3;
  }
more()
{
  this.show=this.add+this.show;
}
  openModal(template: TemplateRef<any>,item:any) {

     this.modalRef = this.modalService.show(PicComponent,{class:'modal-lg',initialState:{current:item}});
   
   }

  


}

