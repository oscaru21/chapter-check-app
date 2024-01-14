import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillComponent } from '../shared/ui/pill.component';
import { InspirationCardComponent } from '../inspiration/ui/inspiration-card.component';

@Component({
    selector: 'app-outline',
    standalone: true,
    imports: [PillComponent, CommonModule, InspirationCardComponent],
    templateUrl: './outline.component.html',
    styles: ``
})
export class OutlineComponent {
    filters: string[] = ['Health', 'Career', 'Mindfulness', 'Education', 'Nutrition', 'Personal Relationships']
    activeFilters: string[] = [];
}
