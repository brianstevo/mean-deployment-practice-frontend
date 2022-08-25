import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
    selector: 'event',
    templateUrl: 'event.component.html'
})

export class EventComponent implements OnInit {
    constructor(public httpClient:HttpClient) { }
    url=environment.PATH
    message:any="" 
    
    ngOnInit(    ) {
        this.getEvent()
     }

    getEvent(){
        this.httpClient.get<{message:string}>(this.url).subscribe(result=>{
            this.message=result.message;
        })
    }     

}