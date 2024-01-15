import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspirationService } from './data-access/inspiration.service';
import { PillComponent, PillParams } from '../shared/ui/pill.component';
import { InspirationCardComponent } from './ui/inspiration-card.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';

@Component({
    selector: 'app-inspiration',
    standalone: true,
    imports: [CommonModule, InspirationCardComponent, PillComponent],
    providers: [FilterPipe],
    templateUrl: './inspiration.component.html',
    styles: []
})
export class InspirationComponent {
    filters: string[] = ['Health', 'Career', 'Mindfulness', 'Education', 'Nutrition', 'Personal Relationships']
    inspos = this.inspirationService.displayableInspo;

    constructor(private inspirationService: InspirationService) { }

    onPillChange(event: PillParams) {
        if (event.isActive) {
            this.inspirationService.filters.update((prev) => [...prev, event.label]);
        } else {
            this.inspirationService.filters.update((prev) => prev.filter(label => label !== event.label));
        }
    }
}
