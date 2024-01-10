import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <button 
      class="text-lg w-full mx-auto rounded-lg flex flex-col justify-center items-center transition-all duration-300 ease-in-out"
      [class]="!isHidden ? 'bg-white h-[160px]': 'h-[60px]'"
    >
      <div class="w-14 h-14 bg-brand text-white rounded-full flex hover:scale-125 justify-center items-center">
        <mat-icon>add</mat-icon>
      </div>
      <span *ngIf="!isHidden">{{label}}</span>
    </button>
  `,
  styles: ``
})
export class AddButtonComponent {
  @Input() label = '';
  @Input() isHidden = false;
}
