import { DecimalPipe } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MathService {

    constructor(private decimalPipe: DecimalPipe) {
    }

    floorFormat2Digits(number: number): any {
        let numbers = number.toString().split('.');
        if (numbers.length === 1 || numbers[1].length == 1 || numbers[1].length == 2) {
            return number;
        }
        let numberAfterFormat = Number(numbers[0] + "." + numbers[1].substring(0, 2));
        return numberAfterFormat;
    }

    numberFormatValue(value: any, format: string = "1.0-2"): any {
        return this.decimalPipe.transform(value, format);
    }

}