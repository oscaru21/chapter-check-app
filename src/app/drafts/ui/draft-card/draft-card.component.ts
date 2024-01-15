import { Component, Input } from '@angular/core';
import { IDraft } from '../../../shared/interfaces/draft';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-draft-card',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div class="w-full max-w-[300px] h-[170px] p-3 bg-white border-border border-4 text-black flex flex-col rounded-xl shadow-lg">
      <div class="flex justify-between text-border">
        <mat-icon>medical_information</mat-icon>
        <button>
          <mat-icon>more_horiz</mat-icon>
        </button>
      </div>
      <div class="grow mt-4">
        {{draft.text}}
      </div>
      <div class="flex justify-end">
        <div
        class="px-5 py-1 rounded-3xl text-sm text-white"
        [class]="statusClasses[draft.status]"
        >{{draft.status}}</div>
      </div>
    </div>
  `,
  styles: ``
})
export class DraftCardComponent {
  @Input() draft!: IDraft;

  statusClasses = {
    'Done': 'bg-[#9ADE7B]',
    'In Progress': 'bg-[#F3B664]',
    'Not Started': 'bg-[#FF004D]'
  }
}
