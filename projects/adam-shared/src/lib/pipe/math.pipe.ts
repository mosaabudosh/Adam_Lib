import { Pipe, PipeTransform } from "@angular/core";
import { MathService } from "../services/math-service.service";

@Pipe({ name: "mathPipe" })
export class MathPipe implements PipeTransform {

    constructor(public _mathService: MathService) { }

    transform(n: number): string {
        if (n === null || n === undefined) {
            return "";
        }
        return this._mathService.floorFormat2Digits(n).toString();
    }
}