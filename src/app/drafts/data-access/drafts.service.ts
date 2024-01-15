import { Injectable } from '@angular/core';
import { IDraft } from '../../shared/interfaces/draft';
import { Status } from '../../shared/interfaces/inspiration';

@Injectable({
  providedIn: 'root'
})
export class DraftsService {
  drafts = this.getDrafts();

  constructor() { }

  private getDrafts() {
    const drafts: IDraft[] = [
      {
        _id: '1',
        outlineId: '1',
        text: 'Eat 3 carrots',
        category: 'Health',
        status: 'Not Started' as Status
      },
      {
        _id: '2',
        outlineId: '2',
        text: 'Eat 3 apples',
        category: 'Health',
        status: 'Not Started' as Status
      },
      {
        _id: '3',
        outlineId: '2',
        text: 'Drink 3L of water',
        category: 'Health',
        status: 'Not Started' as Status
      }
    ];

    return drafts;
  }

  getDraftsByOutlineId(id: string): IDraft[] {
    return this.drafts.filter(draft => draft.outlineId === id);
  }
}
