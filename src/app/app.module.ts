import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroParentComponent } from './components/hero-parent/hero-parent.component';
import { HeroChildComponent } from './components/hero-child/hero-child.component';
import { NameChildComponent } from './components/name-child/name-child.component';
import { DummyServiceService } from './dummy-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroParentComponent,
    HeroChildComponent,
    NameChildComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [DummyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
