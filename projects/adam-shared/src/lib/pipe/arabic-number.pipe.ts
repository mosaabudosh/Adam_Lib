import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "arabicNumber" })
export class ArabicNumberPipe implements PipeTransform {
  transform(n: number, language: string): any {
    if (n === null || n === undefined) {
      return "";
    }
    if (language === 'English') {
      return new Intl.NumberFormat("en-us", {}).format(n);
    } else if (language === 'Arabic') {
      return new Intl.NumberFormat("ar-SA", {}).format(n);
    }
  }
}
