import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filters: string[]): any[] {
        if (!items) return [];
        if (!filters.length) return items;

        return items.filter(item => {
            return filters.includes(item.category);
        });
    }
}
