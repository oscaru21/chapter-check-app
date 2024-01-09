import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { PillComponent } from '../pill/pill.component';
import { CommonModule } from '@angular/common';
import { InspirationCardComponent } from '../inspiration-card/inspiration-card.component';
import { IInspiration } from '../models/inspiration';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-inspiration',
  standalone: true,
  imports: [PillComponent, CommonModule, InspirationCardComponent],
  templateUrl: './inspiration.component.html',
  styles: []
})
export class InspirationComponent {
  filters: string[] = ['Health']
  activeFilters: string[] = [];

  inspirations: IInspiration[] = [
    {
      text: 'Eat Healthier',
      category: 'Health',
      status: 'Done' as any
    },
    {
      text: 'Control my Diabetes',
      category: 'Health',
      status: 'Done' as any
    },
    {
      text: 'Make more exercise',
      category: '',
      status: 'In Progress' as any
    },
    {
      text: 'Graduate from college',
      category: 'Health',
      status: 'Not Started' as any
    }
  ]

  displayableInspo: IInspiration[] = this.inspirations;

  onPillChange(event: any) {
    if (event.isActive) {
      this.activeFilters.push(event.label)
    } else {
      this.activeFilters = this.activeFilters.filter(label => label !== event.label);
    }

    if (this.activeFilters.length !== 0) {
      this.displayableInspo = this.inspirations.filter(inspo => this.activeFilters.includes(inspo.category));
    } else {
      this.displayableInspo = this.inspirations
    }
  }
}
