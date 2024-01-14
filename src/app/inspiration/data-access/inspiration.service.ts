import { Injectable } from '@angular/core';
import { IInspiration, Status } from '../../shared/interfaces/inspiration';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspirationService {

  // sources
  inspirations$ = this.getInspirations();

  constructor() { }

  private getInspirations(): Observable<IInspiration[]> {
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

    return of(inspirations);
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
