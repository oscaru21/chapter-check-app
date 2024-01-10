import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-user',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
    class="flex justify-start items-center py-5"
    [class]="isHidden ? 'flex-col' : ''"
    >
      <div class="rounded-full overflow-hidden w-[70px] h-[70px]">
        <img [src]="imageUrl"/>
      </div>
      <div *ngIf="!isHidden" class="ml-4 flex flex-col items-start justify-center">
        <p class="text-lg font-extralight leading-4">Author</p>
        <p class="text-xl font-normal leading-5">Oscar Umana</p>
      </div>
    </div>
  `,
  styles: ``
})
export class SidebarUserComponent {
  @Input() isHidden = false;
  imageUrl = 'https://www.gravatar.com/avatar/?d=identicon';
}
