import { Routes } from '@angular/router';
import { InspirationComponent } from './inspiration/inspiration.component';
import { OutlineComponent } from './outline/outline.component';
import { DraftsComponent } from './drafts/drafts.component';

export const routes: Routes = [
    { path: '', redirectTo: '/inspiration', pathMatch: 'full' },
    {
        path: 'inspiration',
        title: 'Inspiration',
        component: InspirationComponent
    },
    {
        path: 'outline',
        title: 'Outline',
        component: OutlineComponent
    },
    {
        path: 'drafts',
        title: 'Drafts',
        component: DraftsComponent
    }
];
