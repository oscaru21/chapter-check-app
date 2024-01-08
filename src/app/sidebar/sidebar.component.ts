import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';
import { SidebarItemParams } from '../sidebar-item/sidebar-item-params';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarItemComponent, MatIconModule],
  template: `
    <nav class="h-screen px-5 w-[300px] flex flex-col justify-between bg-secondary rounded-lg text-black static transition-all duration-300 ease-in-out">
      <div class="sidebar-info flex flex-col border-b-2 border-border">
        <div class="sidebar-logo flex justify-between items-center">
          <!-- Left side with logo -->
          <div class="text-xl font-bold cursor-pointer">
          </div>
          <!-- Right side with close icon -->
          <div *ngIf="!collapsed" class="cursor-pointer" (click)="closeClicked()">
            <span class="font-light text-4xl">&times;</span>
          </div>
        </div>
        <div class="sidebar-user flex justify-start items-center py-5">
          <!-- Circular profile picture -->
          <div class="rounded-full overflow-hidden w-[70px] h-[70px]">
            <img src="data:image/jpeg;base64,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" />
          </div>
          <div class="ml-4 flex flex-col items-start justify-center">
            <p class="text-lg font-extralight leading-4">Author</p>
            <p class="text-xl font-normal leading-5">Oscar Umana</p>
          </div>
        </div>
      </div>
      <div class="sidebar-options py-3 flex flex-col grow justify-between border-b-2 border-border">
        <div>
          <app-sidebar-item *ngFor="let item of sidebarItems" [routerLink]="item.routerLink" [title]="item.title" [iconName]="item.iconName">
          </app-sidebar-item>
        </div>
        <div class="flex justify-end">
          <mat-icon class="ml-5">notifications</mat-icon>
          <mat-icon  class="ml-5">settings</mat-icon>
        </div>
      </div>
      <div class="sidebar-add text-2xl h-[165px] w-full m-4 mx-auto p-4 border bg-white rounded-lg flex flex-col justify-center items-center">
        <div class="w-14 h-14 mb-6 bg-brand text-white rounded-full flex justify-center items-center">
          <mat-icon>add</mat-icon>
        </div>
        Add Inspiration
      </div>
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
  collapsed = false;

  toggleCollapse() {
    this.collapsed = !this.collapsed
  }

  closeClicked() {
    this.collapsed = true;
  }
}
