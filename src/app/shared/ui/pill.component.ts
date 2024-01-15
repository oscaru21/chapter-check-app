import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface PillParams {
  isActive: boolean;
  label: string;
}

@Component({
  selector: 'app-pill',
  standalone: true,
  imports: [],
  template: `
    <div>
      <button 
        (click)="toggleActive()"
        class=" px-5 py-1 rounded-3xl border-2 text-sm" 
        [class]="isActive ? 'bg-brand text-white' : 'bg-white text-border border-border'"
      >
        {{label}}
      </button>
    </div>
  `,
  styles: ``
})
export class PillComponent implements PillParams {
  @Input() label!: string;
  @Output() changeActive = new EventEmitter<PillParams>();

  isActive = false;

  toggleActive() {
    this.isActive = !this.isActive
    this.changeActive.emit({
      label: this.label,
      isActive: this.isActive
    })
  }
}