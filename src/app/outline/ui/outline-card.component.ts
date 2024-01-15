import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IOutline } from '../../shared/interfaces/outline';

@Component({
  selector: 'app-outline-card',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div class="w-full max-w-[300px] h-[170px] bg-white border-border border-4 text-black flex flex-col rounded-xl shadow-lg">
      <div class="p-3 flex justify-between text-white bg-border">
        <mat-icon>medical_information</mat-icon>
        <button>
          <mat-icon>more_horiz</mat-icon>
        </button>
      </div>
      <div class="px-3 grow mt-4">
        {{outline.text}}
      </div>
      <div class="px-3 pb-3 flex justify-end">
        <div
        class="px-5 py-1 rounded-3xl text-sm text-white"
        [class]="statusClasses[outline.status]"
        >{{outline.status}}</div>
      </div>
    </div>
  `,
  styles: ``
})
export class OutlineCardComponent {
  @Input() outline!: IOutline;

  statusClasses = {
    'Done': 'bg-[#9ADE7B]',
    'In Progress': 'bg-[#F3B664]',
    'Not Started': 'bg-[#FF004D]'
  }
}
