import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "arabicDate" })
export class ArabicDatePipe implements PipeTransform {
  transform(n: Date, language: any): string | undefined{
    var options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    if (n === null || n === undefined) {
      return "";
    }
    if (language === 'English') {
      return new Intl.DateTimeFormat('en-US', options as any).format(n);
    } else if (language === 'Arabic') {
      return new Intl.DateTimeFormat('ar-JO', options as any).format(n);
    }
  }
}
