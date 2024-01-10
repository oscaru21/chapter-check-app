import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarItemParams } from './sidebar-item-params';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './sidebar-item.component.html',
  styles: []
})
export class SidebarItemComponent implements SidebarItemParams {
  @Input() routerLink: string = '/';
  @Input() title!: string;
  @Input() iconName!: string;
  @Input() isHidden = false;
}
