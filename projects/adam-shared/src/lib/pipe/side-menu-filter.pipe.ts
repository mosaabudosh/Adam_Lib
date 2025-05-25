import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class SideMenuFilterPipe implements PipeTransform {
  results: any = [];
  searchText: any;
  language: any;
  transform(items: any[], args: any[]): any[] {
    this.searchText = args[0];
    this.language = args[1];
    if (!items) return [];

    if (!this.searchText) return items;
    this.searchText = this.searchText.toLowerCase();
    this.results = [];
    let mergedItems = items.map(p => p.items).reduce(function (a, b) { return a.concat(b); }, []);

    if (this.searchText.length == 1) {
      mergedItems.filter((it: any) => {
        if (it.label.match(/\b(\w)/g).join('').toLowerCase().includes(this.searchText)) {
          this.results.push(it);
        }
      });

      if (this.results.length == 0) {
        mergedItems.filter((it: any) => {
          if (it.arabicLabel.split(/\s/).map((word: any) => word[0]).join('').includes(this.searchText)) {
            this.results.push(it);
          }
        });
      }
    }
    if (this.searchText.length > 1) {
      mergedItems.filter((it: any) => {
        if (it.label.toLowerCase().includes(this.searchText)) {
          this.results.push(it);
        }
      });
      if (this.results.length == 0) {
        mergedItems.filter((it: any) => {
          if (it.arabicLabel.includes(this.searchText)) {
            this.results.push(it);
          }
        });
      }

    }
    return this.results;

  }


}

