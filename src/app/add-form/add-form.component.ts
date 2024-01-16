import { Component } from '@angular/core';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [],
  template: `
    <div 
      
      class="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div class="px-4 py-10 md:px-10 bg-secondary border-border border shadow-sm rounded-3xl">
          <form class="">
            <div class="font-normal">
              <div class="mb-3">Inspiration</div>
              <div><span class="font-bold">Think Big Picture:</span> Consider the broader aspects of your life—health, career, relationships</div>
              <div><span class="font-bold">Be Realistic Yet Ambitious:</span> Set goals that are challenging but achievable within the year.</div>
            </div>
            <div class="py-4">
              <div class="mb-5">
                  <label for="base-input" class="block mb-2 font-medium text-black ">Title</label>
                  <input type="text" id="base-input" class="bg-white border  text-black text-sm rounded-lg white block w-full p-2.5">
              </div>
              <div class="mb-5">
                  <label for="large-input" class="block mb-2 font-medium text-black ">Notes</label>
                  <input type="text" id="large-input" class="block w-full p-4 text-black border rounded-lg bg-white sm:text-md white ">
              </div>
            </div>
          </form>
        </div>
    </div>
  `,
  styles: ``
})
export class AddFormComponent {

}
