import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ItemsModule, ReposModule } from '../models/repos.model';
import { map } from "rxjs/operators";
@Injectable({
    providedIn: 'root'
})
export class ReposService {
    private url = environment.SERVER_URL;

    constructor(private http: HttpClient) { }

    getAllRepos(): Observable<ItemsModule> {
        return this.http.get<ItemsModule>(this.url)
    }

    getListRepos(page = 1) {
        return this.http.get(`${this.url}&page=${page}`).pipe(
            map((res: ItemsModule | any) => res.items)
        )
    }
}
