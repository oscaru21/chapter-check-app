import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InspirationComponent } from './inspiration/inspiration.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InspirationComponent, SidebarComponent, RouterModule],
  template: `
    <main class="h-full p-0 m-0 flex bg-white">
      <app-sidebar></app-sidebar>
      <section class="content p-14 mx-auto grow">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styles: []
})
export class AppComponent {

}
