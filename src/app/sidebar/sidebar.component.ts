import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output, Renderer2, inject } from '@angular/core';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';
import { SidebarItemParams } from '../sidebar-item/sidebar-item-params';
import { MatIconModule } from '@angular/material/icon';
import { SidebarUserComponent } from '../sidebar-user/sidebar-user.component';
import { AddButtonComponent } from '../add-button/add-button.component';
import { ActivatedRoute } from '@angular/router';
import { AddFormComponent } from '../add-form/add-form.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarItemComponent, MatIconModule, SidebarUserComponent, AddButtonComponent, AddFormComponent],
  template: `
    <nav 
      class="h-screen px-5 flex flex-col justify-between bg-secondary rounded-lg text-black transition-all duration-300 ease-in-out"
      [class]="isHidden ? 'w-[100px]':'w-[300px]'"
      >
      <div class="sidebar-info flex flex-col border-b-2 border-border">
        <app-sidebar-user (click)="toggleCollapse()" [isHidden]="isHidden"/>
      </div>
      <div class="sidebar-options py-3 flex flex-col grow justify-between border-b-2 border-border">
        <div>
          <app-sidebar-item 
            *ngFor="let item of sidebarItems" 
            [routerLink]="item.routerLink" 
            [title]="item.title" 
            [iconName]="item.iconName"
            [isHidden]="isHidden"
          />
        </div>
      </div>
      <app-add-button class="my-4" [isHidden]="isHidden" (click)="addItem()"/>
      <app-add-form/>
  `,
  styles: [
  ]
})
export class SidebarComponent {
  @Output() addItemEvent = new EventEmitter();
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
  isHidden = false;

  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {
    // Initial check on component initialization
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    const screenWidth = window.innerWidth;

    const smallScreenBreakpoint = 640;

    if (screenWidth <= smallScreenBreakpoint) {
      this.closeClicked();
    }
  }

  toggleCollapse() {
    this.isHidden = !this.isHidden
  }

  closeClicked() {
    this.isHidden = true;
  }

  addItem() {
  }
}
