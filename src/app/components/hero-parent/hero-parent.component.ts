import { Component, OnInit } from '@angular/core';
import { Heroes } from 'src/app/hero.type';
import { DummyServiceService } from 'src/app/dummy-service.service';


@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit {


  heroes = Heroes;
  master = 'Master';

  names = ['Chansey', '', 'Meowth', 'Psyduck'];

  messages = ['Hi', 'Goodbye', 'Hola'];

  constructor(private dummyService: DummyServiceService) {

   }

  ngOnInit() {
    this.dummyService.dummySubject$.subscribe(message => {
      console.log(message);
    });
  }

  showMessage() {
  }

}
