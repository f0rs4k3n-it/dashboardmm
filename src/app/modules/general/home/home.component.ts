import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { sample } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  constructor() { }
  public clickMessage: any;

  ngOnInit(): void {

  }

  

show_name(): void {
      const animal = {
        type: 'Cat',
        info: {
          about: {
            name:'Dinah',
            surname:'Green',
            address:{
              via:'address 1564',
              postal:'82553'
            }
        }
      }
    }

  }
}
