import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Parameter } from "../models/adam-query-option";
import { AppConfig } from "../models/app.config";

@Injectable({
  providedIn: 'root'
})
export class HTTPHandlerManagement {
  private endpoint: string;
  private options: HttpParams = new HttpParams();
  private apiUrl: string;
  private serviceName: string | any;

  constructor(private http: HttpClient) { }

  get<T>(parameters?: Parameter): Observable<any> {
    this.clearOptions();
    if (parameters) {
      this.setParameters(parameters);
    }
    return this.http.get<T[]>(`${this.apiUrl}/${this.endpoint}`, { params: this.options, withCredentials: true });
    // .pipe(
    //   map(data => data),
    //   catchError(error => error)
    // );
  }

  create<T>(item: T, parameters?: Parameter): Observable<any> {
    this.clearOptions();
    if (parameters) {
      this.setParameters(parameters);
    }
    return this.http.post<T>(`${this.apiUrl}/${this.endpoint}`, item,
      {
        params: this.options
      }).pipe(
        map(data => data),
        catchError(error => {
          console.error("logout => ", error)
          return of(false);
        })
      );
  }

  update<T>(item: T, id?: number, parameters?: Parameter): Observable<any> {
    this.clearOptions();
    if (parameters) {
      this.setParameters(parameters);
    }
    let Url = `${this.apiUrl}/${this.endpoint}`;
    if (id != null) {
      Url = Url + "/" + id;
    }
    return this.http.put<T>(Url, item,
      {
        params: this.options
      }).pipe(
        map(data => data),
        catchError(error => {
          console.error("logout => ", error)
          return of(false);
        })
      );
  }

  getById<T>(id: number, parameters?: Parameter): Observable<any> {
    this.clearOptions();
    if (parameters) {
      this.setParameters(parameters);
    }
    return this.http.get(`${this.apiUrl}/${this.endpoint}/${id}`,
      {
        params: this.options
      }).pipe(
        map(data => data),
        catchError(error => {
          console.error("logout => ", error)
          return of(false);
        })
      );
  }

  delete<T>(id: number, parameters?: Parameter) {
    this.clearOptions();
    if (parameters) {
      this.setParameters(parameters);
    }
    return this.http.post(`${this.apiUrl}/${this.endpoint}/${id}`, null,
      {
        params: this.options
      }).pipe(
        map(data => data),
        catchError(error => {
          console.error("logout => ", error)
          return of(false);
        })
      );
  }

  post(postBody: any, parameters?: Parameter) {
    this.clearOptions();
    if (parameters) {
      this.setParameters(parameters);
    }
    return this.http.post(`${this.apiUrl}/${this.endpoint}`, postBody,
      {
        params: this.options
      }).pipe(
        map(data => data),
        catchError(error => {
          console.error("logout => ", error)
          return of(false);
        })
      );
  }

  setProperties(endpoint: string, serviceName?: string, apiUrl?: string) {
    this.endpoint = endpoint;
    this.serviceName = serviceName;
    if (apiUrl == null) {
      this.apiUrl = AppConfig.apiUrl;
    }
    else {
      this.apiUrl = apiUrl;
    }
  }

  setParameters(obj: any) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        for (const subKey in obj[key]) {
          if (obj[key].hasOwnProperty(subKey)) {
            // if (obj[key][subKey] instanceof Array) {
            //   //this.options = this.options.append(subKey, obj[key][subKey]); // not recommended ask mohammad?
            //   //this.options = this.options.set(subKey, JSON.stringify(obj[key][subKey]));
            // }
            if (!(obj[key][subKey] instanceof Object)) {
              this.options = this.options.set(subKey, obj[key][subKey]);
            }
            else if ((obj[key][subKey] instanceof Date)) {
              this.options = this.options.set(subKey, obj[key][subKey]);
            } else {
              for (const ndsubKey in obj[key][subKey]) {
                if (obj[key][subKey].hasOwnProperty(ndsubKey) && !(obj[key][subKey] instanceof Array)) {
                  this.options = this.options.set(ndsubKey, obj[key][subKey][ndsubKey]);
                } else {
                  this.options = this.options.append(subKey + "[" + ndsubKey + "]", obj[key][subKey][ndsubKey]);
                }
              }
            }
          }
        }
      }
    }
  }

  clearOptions() {
    this.options = new HttpParams();
  }
}