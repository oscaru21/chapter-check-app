import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-add',
    standalone: true,
    imports: [MatIconModule],
    template: `
    <div class="w-full max-w-[300px] h-[170px] border-border border-4 border-dashed flex justify-center items-center rounded-xl cursor-pointer hover:scale-105 hover:shadow-lg transition-all ease-in-out">
        <mat-icon class="w-[200px] aspect-square text-border">add</mat-icon>
    </div>
  `,
    styles: ``
})
export class AddComponent {
}
