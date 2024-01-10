import { Component } from '@angular/core';
import { IInspiration } from '../models/inspiration';
import { InspirationCardComponent } from '../inspiration-card/inspiration-card.component';
import { CommonModule } from '@angular/common';
import { PillComponent } from '../pill/pill.component';

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
