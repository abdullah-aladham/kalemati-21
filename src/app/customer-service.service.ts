import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Customer} from"./Customer";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
private apiServerUrl=environment.apiBaseUrl;
  constructor(private http: HttpClient) { }
  public getCustomers():Observable<Customer[]>
  {
    return this.http.get<Customer[]>(`${this.apiServerUrl}/Customer/all`);
  }
  public addCustomer(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(`${this.apiServerUrl}/Customer/add`,customer);

  }
  public updateCustomer(customer:Customer):Observable<Customer>{
    return this.http.put<Customer>(`${this.apiServerUrl}/Customer/update`,customer);

  }
  public deleteCustomer(customerId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/Customer/delete/${customerId}`);

  }
}
