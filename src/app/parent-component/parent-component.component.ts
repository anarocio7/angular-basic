import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  name = 'child-component';
  age = 30;
  things = ['a', 'b', 'c'];



  constructor() { }

  ngOnInit() {
  }

  addParentEvent(thing: string) {
    this.things.push(thing);
  }

}
