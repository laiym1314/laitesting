import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MoreService {
    more:any;
    constructor() 
    {
        

    }

    call(end:any)
    {
        var iterator = function(a, n) {
            var current = 0,
                l = a.length;
            return function() {
                end = current + n;
                var part = a.slice(current,end);
                if(end > l) {
                    end = end % l;
                    part = part.concat(a.slice(0, end));
                }
                current = end;
                return part;
            };
        };
    }
}