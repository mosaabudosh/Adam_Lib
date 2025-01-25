import { Pipe, PipeTransform } from "@angular/core";
const e2a = s => s.replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
const a2e = s => s.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));

@Pipe({ name: "numberPipe" })
export class NumberPipe implements PipeTransform {
    transform(value: any, languageCode: string): string {
        let result: string = "";
        if (value) {
            if (!languageCode || languageCode == "en-US") {
                result = a2e(value.toString());
            } else {
                result = e2a(value.toString());
            }
        }
        return result;
    }

}