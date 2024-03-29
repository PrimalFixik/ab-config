import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})

export class ExperimentsService {
    constructor(private readonly http: HttpClient) {}

    getExperiments(advertisementType: string, tags: Array<string>): Observable<any> {
        let params = new HttpParams();

        tags.forEach(tag => {
          params = params.append('tags', tag);
        })

        return this.http.get(environment.apiBaseDomain + '/experiments/' + advertisementType, {
            params,
        });
    }
}
