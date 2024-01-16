import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './shared/ui/sidebar.component';
import { AddFormComponent } from './add-form/add-form.component';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, RouterModule, AddFormComponent, ModalComponent],
  template: `
    <main class="p-0 m-0 min-h-screen w-screen flex bg-white items-start">
      <app-sidebar class="z-10"></app-sidebar>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: []
})
export class AppComponent {

}
