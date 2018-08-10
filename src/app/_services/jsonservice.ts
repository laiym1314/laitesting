import { Injectable, Component } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 
import { Picture } from '../_modal/picture';


@Injectable()

export class JsonService
{

    constructor(private http: HttpClient) { }

    getData() {
      return this.http.get<Picture[]>('./src/assets/samples.json');

    }
    

}
