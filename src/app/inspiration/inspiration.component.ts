import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspirationService } from './data-access/inspiration.service';
import { PillComponent } from '../shared/ui/pill.component';
import { InspirationCardComponent } from './ui/inspiration-card.component';

@Component({
    selector: 'app-inspiration',
    standalone: true,
    imports: [CommonModule, InspirationCardComponent, PillComponent],
    templateUrl: './inspiration.component.html',
    styles: []
})
export class InspirationComponent {
    filters: string[] = ['Health', 'Career', 'Mindfulness', 'Education', 'Nutrition', 'Personal Relationships']
    activeFilters: string[] = [];
    inspirations$ = this.inspirationService.inspirations$;

    constructor(private inspirationService: InspirationService) { }

    onPillChange(event: any) {
        // if (event.isActive) {
        //     this.activeFilters.push(event.label)
        // } else {
        //     this.activeFilters = this.activeFilters.filter(label => label !== event.label);
        // }

        // if (this.activeFilters.length !== 0) {
        //     this.displayableInspo = this.inspirations.filter(inspo => this.activeFilters.includes(inspo.category));
        // } else {
        //     this.displayableInspo = this.inspirations
        // }
    }
}
