import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddComponent } from '../shared/ui/add.component';
import { OutlineService } from '../outline/data-access/outline.service';
import { DraftsService } from './data-access/drafts.service';
import { DraftCardComponent } from './ui/draft-card/draft-card.component';
import { OutlineCardComponent } from '../outline/ui/outline-card.component';

@Component({
  selector: 'app-drafts',
  standalone: true,
  imports: [CommonModule, AddComponent, DraftCardComponent, OutlineCardComponent],
  templateUrl: './drafts.component.html',
  styles: ``
})
export class DraftsComponent {
  outlines = this.outlineService.outlines;

  constructor(private outlineService: OutlineService, private draftsService: DraftsService) { }

  getByParentId(id: string) {
    return this.draftsService.getDraftsByOutlineId(id);
  }
}
