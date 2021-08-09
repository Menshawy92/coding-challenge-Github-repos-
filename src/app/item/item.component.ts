import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemsModule, ReposModule } from '../models/repos.model';
import { ReposService } from '../services/repos.service';
import { map } from "rxjs/operators";

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

  constructor(private reposService: ReposService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.repos$ = this.reposService.getAllRepos()
      .pipe(
        map((apiResponse: ItemsModule) => apiResponse.items)
      );

    this.reposService.getListRepos().subscribe(data => {
      this.newList = data
    })
  }
  onScroll() {
    this.reposService.getListRepos(++this.page).subscribe(data => {
      this.newList = [...this.newList, ...data] //this.newList.concat(data) 
    })
  }
}
