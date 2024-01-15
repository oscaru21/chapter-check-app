import { Injectable } from '@angular/core';
import { IOutline } from '../../shared/interfaces/draft';

@Injectable({
  providedIn: 'root'
})
export class OutlineService {

  outlines = this.getOutlines();

  constructor() { }

  private getOutlines() {
    const outlines: IOutline[] = [
      {
        _id: '1',
        inspirationId: '1',
        text: 'Eat carrots',
        category: 'Health',
        status: 'Not Started'
      },
      {
        _id: '2',
        inspirationId: '1',
        text: 'Eat less sugar',
        category: 'Health',
        status: 'Not Started'
      },
      {
        _id: '3',
        inspirationId: '2',
        text: 'Run every morning',
        category: 'Health',
        status: 'Not Started'
      }
    ];

    return outlines;
  }

  getOutlineByInspirationId(id: string): IOutline[] {
    return this.outlines.filter(outline => outline.inspirationId === id);
  }
}
