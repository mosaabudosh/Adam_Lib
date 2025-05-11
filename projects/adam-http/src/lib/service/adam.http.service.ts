import { AppConfig } from "../models/app.config";
import { Parameter } from "../models/adam-query-option";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HTTPHandlerManagement } from "./HTTPHandlerManagement";
import { StorageService } from "./storage.service";

@Injectable({
    providedIn: 'root'
})
export class AdamHTTPService {
    private endpoint: string;
    private serviceName: string | undefined;
    private apiUrl: string;

    constructor(private _httpHandlerManagement: HTTPHandlerManagement, private storageService: StorageService) {
    }

    setProperties(endpoint: string, serviceName?: string, apiUrl?: string) {
        try {
            this.endpoint = endpoint;
            this.serviceName = serviceName;
            if (apiUrl == null) {
                this.apiUrl = AppConfig.apiUrl;
            }
            else {
                this.apiUrl = apiUrl;
            }
            this._httpHandlerManagement.setProperties(this.endpoint, this.serviceName, this.apiUrl);
        }
        catch (ex) {
            console.error('setProperties => ', ex)
        }
    }

    get<T>(parameters?: Parameter): Observable<T | T[]> {
        try {
            return this._httpHandlerManagement.get(parameters);
        }
        catch (ex) {
            console.error('get => ', ex);
            return new Observable;
        }
    }

    create<T>(item: T, parameters?: Parameter): Observable<T> {
        try {
            return this._httpHandlerManagement.create(item, parameters);
        }
        catch (ex) {
            console.error('create => ', ex);
            return new Observable;
        }
    }

    update<T>(item: T, id?: number, parameters?: Parameter): Observable<T> {
        try {
            return this._httpHandlerManagement.update(item, id, parameters);
        }
        catch (ex) {
            console.error('update => ', ex);
            return new Observable;
        }
    }

    getById<T>(id: number, parameters?: Parameter): Observable<T> {
        try {
            return this._httpHandlerManagement.getById(id, parameters);
        }
        catch (ex) {
            console.error('getById => ', ex);
            return new Observable;
        }
    }

    delete<T>(id: number, parameters?: Parameter) {
        try {
            return this._httpHandlerManagement.delete(id, parameters);
        }
        catch (ex) {
            console.error('delete => ', ex)
        }
    }

    post(postBody: any, parameters?: Parameter) {
        try {
            return this._httpHandlerManagement.post(postBody, parameters);
        }
        catch (ex) {
            console.error('post => ', ex)
        }
    }

    openUrl(url: string, counter?: number, accessToken?: string, defaultLanguageCode?: string): XMLHttpRequest {
        try {
            var request = new XMLHttpRequest();
            request.open("get", url, true);
            request.setRequestHeader("Content-type", "application/json");
            request.setRequestHeader("Authorization", `Bearer ${accessToken}`);
            let timezoneOffset: number = new Date().getTimezoneOffset();
            request.setRequestHeader("TimeZone-Offset", timezoneOffset.toString());
            request.setRequestHeader("Accept-Language", defaultLanguageCode ? defaultLanguageCode : 'en-US');
            request.onload = function () {
                var jsonResponse = request.response;
                var url = window.URL.createObjectURL(jsonResponse);
                let leftPosition = (screen.width) ? (screen.width - 550) / 2 : 0;
                let topPosition = (screen.height) ? (screen.height - 550) / 2 : 0;
                let settings = counter ? ('height=' + 750 + ',width=' + 850 + ',top=' + topPosition + ',left=' + (leftPosition - (counter * 50)) + ',scrollbars=' + scroll + ',resizable') : ('height=' + 750 + ',width=' + 850 + ',top=' + topPosition + ',left=' + leftPosition + ',scrollbars=' + scroll + ',resizable')
                let popUpWindow = counter ? ('popUpWindow' + counter) : 'popUpWindow';
                window.open(url, popUpWindow, settings);

            };
            request.send(null);
            request.responseType = 'blob';
            return request;
        }
        catch (ex) {
            console.error('openUrl => ', ex);
            return new XMLHttpRequest();
        }
    }

    openReport(url: string, counter?: number, accessToken?: string, defaultLanguageCode?: string): XMLHttpRequest {
        try {
            var request = new XMLHttpRequest();
            request.open("get", url, true);
            request.setRequestHeader("Content-type", "application/json");
            request.setRequestHeader("Authorization", `Bearer ${accessToken}`);
            request.setRequestHeader("ResponeType", "report");
            let timezoneOffset: number = new Date().getTimezoneOffset();
            request.setRequestHeader("TimeZone-Offset", timezoneOffset.toString());
            request.setRequestHeader("Accept-Language", defaultLanguageCode ? defaultLanguageCode : 'en-US');
            request.onload = function () {
                var jsonResponse = request.response;
                var url = window.URL.createObjectURL(jsonResponse);
                let leftPosition = (screen.width) ? (screen.width - 550) / 2 : 0;
                let topPosition = (screen.height) ? (screen.height - 550) / 2 : 0;
                let settings = counter ? ('height=' + 750 + ',width=' + 850 + ',top=' + topPosition + ',left=' + (leftPosition - (counter * 50)) + ',scrollbars=' + scroll + ',resizable') : ('height=' + 750 + ',width=' + 850 + ',top=' + topPosition + ',left=' + leftPosition + ',scrollbars=' + scroll + ',resizable')
                let popUpWindow = counter ? ('popUpWindow' + counter) : 'popUpWindow';
                window.open(url, popUpWindow, settings);

            };
            request.send(null);
            request.responseType = 'blob';
            return request;
        }
        catch (ex) {
            console.error('openReport => ', ex);
            return new XMLHttpRequest();
        }
    }

    openReportWithBody(url: string, body: any, counter?: number, accessToken?: string, defaultLanguageCode?: string): XMLHttpRequest {
        try {
            var request = new XMLHttpRequest();
            request.open("post", url, true);
            request.setRequestHeader("Content-type", "application/json");
            request.setRequestHeader("Authorization", `Bearer ${accessToken}`);
            request.setRequestHeader("ResponeType", "report");
            let timezoneOffset: number = new Date().getTimezoneOffset();
            request.setRequestHeader("TimeZone-Offset", timezoneOffset.toString());
            request.setRequestHeader("Accept-Language", defaultLanguageCode ? defaultLanguageCode : 'en-US');
            request.onload = function () {
                var jsonResponse = request.response;
                var url = window.URL.createObjectURL(jsonResponse);
                let leftPosition = (screen.width) ? (screen.width - 550) / 2 : 0;
                let topPosition = (screen.height) ? (screen.height - 550) / 2 : 0;
                let settings = counter ? ('height=' + 750 + ',width=' + 850 + ',top=' + topPosition + ',left=' + (leftPosition - (counter * 50)) + ',scrollbars=' + scroll + ',resizable') : ('height=' + 750 + ',width=' + 850 + ',top=' + topPosition + ',left=' + leftPosition + ',scrollbars=' + scroll + ',resizable')
                let popUpWindow = counter ? ('popUpWindow' + counter) : 'popUpWindow';
                window.open(url, popUpWindow, settings);
            };
            request.send(JSON.stringify(body));
            request.responseType = 'blob';
            return request;
        }
        catch (ex) {
            console.error('openReportWithBody => ', ex);
            return new XMLHttpRequest();
        }
    }


}