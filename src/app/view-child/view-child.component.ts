import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ChildTwoComponent } from '../child-two/child-two.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements AfterViewInit {

  @ViewChild('a', {static: false}) child: ChildTwoComponent;

  constructor() { }

  ngAfterViewInit() {
    // tslint:disable-next-line:no-unused-expression
    console.log(this.child)//this.child.methodTwo());
  }

}
