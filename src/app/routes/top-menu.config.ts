import { Routes } from "@angular/router";
import {HomeComponent} from "../components/home.component"
import { DestinationsComponent } from "../components/destinations.component";
import { PhotosComponent } from "../components/photos.component";

export const routerConfig: Routes = [
    {
        path: '',
        component: HomeComponent
    }, 
    {
        path: 'destinations',
        component: DestinationsComponent
    },
    {
        path: 'photos',
        component: PhotosComponent
    },

];