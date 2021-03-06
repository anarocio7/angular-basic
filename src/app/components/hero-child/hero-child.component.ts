import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/hero.type';


@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent implements OnInit {


  @Input() hero: Hero;
  @Input() masterName: string;

  constructor() { }

  ngOnInit() {
  }

}
