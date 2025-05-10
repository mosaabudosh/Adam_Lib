import { Injectable } from '@angular/core';
import { AdamHTTPService, Parameter } from 'adam-http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdamLibTestService {

  parameter: Parameter = {};

  constructor(
    private _adamHTTPService: AdamHTTPService
  ) { }

  getUsers(): Observable<any> {
    this._adamHTTPService.setProperties("UserManagement/users", "UserService", 'http://localhost:5065/api');
    this.parameter.queryParameters = {};
    this.parameter.queryParameters['pageNumber'] = 0;
    this.parameter.queryParameters['pageSize'] = 100;
    return this._adamHTTPService.get(this.parameter);
  }
}
