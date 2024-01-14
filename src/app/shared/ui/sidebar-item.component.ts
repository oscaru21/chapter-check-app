import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

export interface SidebarItemParams {
  iconName: string;
  routerLink: string;
  title: string;
}

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  template: `
    <div [routerLink]="params.routerLink" class="sidebar-icon group">
      <mat-icon>{{params.iconName}}</mat-icon>
      <span class="sidebar-tooltip group-hover:scale-100">
        {{params.title}}
      </span>
    </div>
  `,
  styles: []
})
export class SidebarItemComponent {
  @Input() params!: SidebarItemParams;
}
