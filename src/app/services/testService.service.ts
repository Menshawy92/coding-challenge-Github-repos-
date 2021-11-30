import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  public notification = new Subject<string>()
  public notification2 = new BehaviorSubject<string>('Here is text')

  constructor() { }

  testMethod(data: any) {
    this.notification.next(data);
  }

  testMethod2(data: any) {
    this.notification2.next(data)
  }

}
