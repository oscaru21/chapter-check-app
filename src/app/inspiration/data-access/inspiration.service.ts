import { Injectable, computed, signal } from '@angular/core';
import { IInspiration, Status } from '../../shared/interfaces/inspiration';

@Injectable({
  providedIn: 'root'
})
export class InspirationService {
  filters = signal<string[]>([]);


  //sources
  inspirations = this.getInspirations();
  displayableInspo = computed(() => {
    if (!this.filters().length) {
      return this.inspirations;
    } else {
      return this.inspirations.filter(inspo => this.filters().includes(inspo.category));
    }
  })

  constructor() { }

  private getInspirations(): IInspiration[] {
    const inspirations: IInspiration[] = [
      {
        text: 'Eat Healthier',
        category: 'Health',
        status: 'Done' as Status
      },
      {
        text: 'Control my Diabetes',
        category: 'Health',
        status: 'Done' as Status
      },
      {
        text: 'Make more exercise',
        category: '',
        status: 'In Progress' as Status
      },
      {
        text: 'Graduate from college',
        category: 'Health',
        status: 'Not Started' as Status
      }
    ]

    return inspirations;
  }

  private addInspiration(text: string, category: string) {
    const newInspiration = {
      text,
      category,
      created: Date.now().toString(),
    };

    return newInspiration;
  }
}
