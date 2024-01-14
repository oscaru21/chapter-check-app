import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IInspiration } from '../../shared/interfaces/inspiration';

@Component({
    selector: 'app-inspiration-card',
    standalone: true,
    imports: [MatIconModule],
    template: `
    <div class="w-full h-[170px] p-3 bg-border text-white flex flex-col rounded-xl">
      <div class="flex justify-between">
        <mat-icon>medical_information</mat-icon>
        <button>
          <mat-icon>more_horiz</mat-icon>
        </button>
      </div>
      <div class="grow mt-4">
        {{inspiration.text}}
      </div>
      <div class="flex justify-end">
        <div
        class="px-5 py-1 rounded-3xl text-sm text-white"
        [class]="statusClasses[inspiration.status]"
        >{{inspiration.status}}</div>
      </div>
    </div>
  `,
    styles: ``
})
export class InspirationCardComponent {
    @Input() inspiration!: IInspiration;

    statusClasses = {
        'Done': 'bg-[#9ADE7B]',
        'In Progress': 'bg-[#F3B664]',
        'Not Started': 'bg-[#FF004D]'
    }
}
