import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-user',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center justify-center my-4 hover:scale-110 cursor-pointer group">
      <div class="rounded-full overflow-hidden w-12 h-12">
        <img [src]="imageUrl"/>
      </div>
      <div class="sidebar-tooltip group-hover:scale-100">
        <p class="text-md font-extralight leading-4">Author</p>
        <p class="text-lg font-normal leading-5">Oscar Umana</p>
      </div>
    </div>
  `,
  styles: ``
})
export class SidebarUserComponent {
  @Input() isHidden = false;
  imageUrl = 'https://www.gravatar.com/avatar/?d=identicon';
}
