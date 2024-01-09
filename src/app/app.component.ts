import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InspirationComponent } from './inspiration/inspiration.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InspirationComponent, SidebarComponent, RouterModule],
  template: `
    <main class="p-0 m-0 flex bg-white items-start">
      <app-sidebar class="sticky top-0"></app-sidebar>
      <section class="content p-14 mx-auto grow">
        <div class="bg-white">
          <router-outlet></router-outlet>
        </div>
      </section>
    </main>
  `,
  styles: []
})
export class AppComponent {

}
