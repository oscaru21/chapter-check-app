import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarItemParams } from './sidebar-item-params';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './sidebar-item.component.html',
  styles: []
})
export class SidebarItemComponent implements SidebarItemParams {
  @Input() routerLink: string = '/';
  @Input() title!: string;
  @Input() iconName!: string;
}
