import { Component, TemplateRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ModalService } from '../../modal/data-access/modal.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div 
      (click)="openModal(modalTemplate)"
      class="w-full max-w-[300px] h-[170px] border-border border-4 border-dashed flex justify-center items-center rounded-xl cursor-pointer hover:scale-105 hover:shadow-lg transition-all ease-in-out">
        <mat-icon class="w-[200px] aspect-square text-border">add</mat-icon>
    </div>
    <ng-template #modalTemplate>
      <div>This is our custom modal content</div>
    </ng-template>
  `,
  styles: ``
})
export class AddComponent {
  constructor(private modalService: ModalService) { }

  openModal(modalTemplate: TemplateRef<any>) {
    this.modalService
      .open(modalTemplate)
      .subscribe((action) => {
        console.log('modalAction', action);
      });
  }
}
