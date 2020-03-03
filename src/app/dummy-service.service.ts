import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyServiceService {

  private dummySubject = new Subject<string>();

  dummySubject$ = this.dummySubject.asObservable();

  showMessage(message: string) {
    console.log(message);
    this.dummySubject.next(message);
  }
}
