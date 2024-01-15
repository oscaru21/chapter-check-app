import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillComponent, PillParams } from '../shared/ui/pill.component';
import { InspirationCardComponent } from '../inspiration/ui/inspiration-card.component';
import { InspirationService } from '../inspiration/data-access/inspiration.service';
import { OutlineService } from './data-access/outline.service';
import { AddComponent } from '../shared/ui/add.component';
import { OutlineCardComponent } from './ui/outline-card.component';

@Component({
    selector: 'app-outline',
    standalone: true,
    imports: [PillComponent, CommonModule, InspirationCardComponent, AddComponent, OutlineCardComponent],
    templateUrl: './outline.component.html',
    styles: ``
})
export class OutlineComponent {
    filters: string[] = ['Health', 'Career', 'Mindfulness', 'Education', 'Nutrition', 'Personal Relationships']
    inspos = this.inspirationService.displayableInspo;

    constructor(private inspirationService: InspirationService,
        private outlineService: OutlineService) { }

    getByParentId(id: string) {
        return this.outlineService.getOutlineByInspirationId(id);
    }

    onPillChange(event: PillParams) {
        if (event.isActive) {
            this.inspirationService.filters.update((prev) => [...prev, event.label]);
        } else {
            this.inspirationService.filters.update((prev) => prev.filter(label => label !== event.label));
        }
    }

}
