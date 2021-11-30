import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemsModule, ReposModule } from '../models/repos.model';
import { ReposService } from '../services/repos.service';
import { map } from "rxjs/operators";
import { TestServiceService } from '../services/testService.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  repos$: Observable<Array<ReposModule>> | any = {};
  pageOfItems: Array<any> | any;
  newList: any = [];
  page = 1;
  message = 'Hello Subject'

  constructor(private reposService: ReposService, private _route: ActivatedRoute,
    private _router: Router, private testServiceService:TestServiceService) { }

  ngOnInit() {
    this.testServiceService.testMethod2(this.message)
    this.repos$ = this.reposService.getAllRepos()
      .pipe(
        map((apiResponse: ItemsModule) => apiResponse.items)
      );

    this.reposService.getListRepos().subscribe(data => {
      this.newList = data
    })
  }

  // sendMessage(data:any){
  //   this.testServiceService.testMethod(data.value)
  // }


  onScroll() {
    this.reposService.getListRepos(++this.page).subscribe(data => {
      this.newList = [...this.newList, ...data] //this.newList.concat(data) 
    })
  }
}
