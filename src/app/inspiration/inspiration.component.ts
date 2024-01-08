import { Component } from '@angular/core';
import { PillComponent } from '../pill/pill.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inspiration',
  standalone: true,
  imports: [PillComponent, CommonModule],
  templateUrl: './inspiration.component.html',
  styles: []
})
export class InspirationComponent {
  filters: string[] = ['Health', 'Mindfulness', 'Finances', 'Career', 'Relationships']
  activeFilters: string[] = [];

  onPillChange(event: any) {
    if (event.isActive) {
      this.activeFilters.push(event.label)
    } else {
      this.activeFilters = this.activeFilters.filter(label => label !== event.label);
    }
    console.log(this.activeFilters);
  }
}
