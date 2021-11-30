import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../services/testService.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  messgeHere = '';

  constructor(private testServiceService: TestServiceService) { }

  ngOnInit() {
    this.testServiceService.notification2.subscribe(d => {
      this.messgeHere = d
    })
  }

}
