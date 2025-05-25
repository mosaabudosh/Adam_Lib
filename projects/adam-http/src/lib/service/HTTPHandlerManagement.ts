import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
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
    return this.http.get<T[]>(`${this.apiUrl}/${this.endpoint}`, { params: this.options, withCredentials: true })
      .pipe(
        // map(data => data as T),
        switchMap(() => {
          return of((data: any) => data as T); // ✅ returns an Observable
        }),
        catchError(error => {
          console.error("Error in HTTPHandlerManagement in ( get ) \n  => ", error);
          // this.handleError(error, 'get');
          return of();
        })
      );
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
        // map(data => data as T),
        switchMap(() => {
          return of((data: any) => data as T); // ✅ returns an Observable
        }),
        catchError(error => {
          console.error("Error in HTTPHandlerManagement in ( create ) \n  => ", error);
          // this.handleError(error, 'create');
          return of();
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
        // map(data => data as T),
        switchMap(() => {
          return of((data: any) => data as T); // ✅ returns an Observable
        }),
        catchError(error => {
          console.error("Error in HTTPHandlerManagement in ( update ) \n  => ", error)
          // this.handleError(error, 'update');
          return of();
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
        // map(data => data as T),
        switchMap(() => {
          return of((data: any) => data as T); // ✅ returns an Observable
        }),
        catchError(error => {
          console.error("Error in HTTPHandlerManagement in ( getById ) \n  => ", error)
          // this.handleError(error, 'getById');
          return of();
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
        // map(data => data as T),
        switchMap(() => {
          return of((data: any) => data as T); // ✅ returns an Observable
        }),
        catchError(error => {
          console.error("Error in HTTPHandlerManagement in ( delete ) \n  => ", error)
          // this.handleError(error, 'delete');
          return of();
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
        // map(data => data as T),
        switchMap(() => {
          return of((data: any) => data); // ✅ returns an Observable
        }),
        catchError(error => {
          console.error("Error in HTTPHandlerManagement in ( post ) \n  => ", error);
          // this.handleError(error, 'post');
          return of();
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

  handleError<T>(error: any, metthod: string) {
    return (error: HttpErrorResponse): Observable<T> => {
      const message = (error.error instanceof ErrorEvent) ? `Error : ${error.error.message} in ${metthod}` : `server returned code ${error?.status} with body "${error?.error}" in ${metthod}`;
      console.error(`handleError => ${error} \n message => ${message}`);
      return of();
    };

  }
}