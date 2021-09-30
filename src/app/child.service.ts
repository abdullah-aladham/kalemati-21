import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { child } from './child';
import{HttpClient} from '@angular/common/http';
import { environment } from 'D:/ion21/kalemati/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
 /* private apiServerUrl=environment.apiBaseUrl;
  constructor(private http: HttpClient) { }
  public getChildren():Observable<child[]>
  {
    return this.http.get<child[]>(`${this.apiServerUrl}/child/all`);
  }
  public addChild(Child:child):Observable<child>{
    return this.http.post<child>(`${this.apiServerUrl}/child/add`,Child);

  }
  public updateChild(Child:child):Observable<child>{
    return this.http.put<child>(`${this.apiServerUrl}/child/update`,Child);

  }
  public deleteChild(childId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/child/delete/${childId}`);

  }*/
}
