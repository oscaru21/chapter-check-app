import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SidebarItemComponent, SidebarItemParams } from './sidebar-item.component';
import { SidebarUserComponent } from './sidebar-user.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule, SidebarItemComponent, SidebarUserComponent],
  template: `
    <nav 
      class="fixed top-0 left-0 h-full w-16 rounded-xl flex flex-col justify-between bg-border dark:bg-gray-900 shadow-lg"
    >
      <section>
        <app-sidebar-item *ngFor="let item of sidebarItems" [params]="item"></app-sidebar-item>
      </section>
       <app-sidebar-user></app-sidebar-user>
    </nav>
  `,
  styles: [
  ]
})
export class SidebarComponent {
  sidebarItems: SidebarItemParams[] = [
    {
      iconName: 'lightbulb',
      routerLink: 'inspiration',
      title: 'Inspiration'
    },
    {
      iconName: 'flag',
      routerLink: 'outline',
      title: 'Outline'
    },
    {
      iconName: 'book',
      routerLink: 'drafts',
      title: 'Drafts'
    }
  ]
}
