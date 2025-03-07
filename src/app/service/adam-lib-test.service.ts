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
    return this._adamHTTPService.get();
  }
}
