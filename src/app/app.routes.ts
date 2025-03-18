import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { RenderMode } from '@angular/ssr';



export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'content/:id',
        component: ContentComponent,
    }
];
