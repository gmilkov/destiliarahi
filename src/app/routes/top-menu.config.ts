import { Routes } from "@angular/router";
import {HomeComponent} from "../top-menu/home.component"
import { PhotosComponent } from "../top-menu/photos.component";
import { DestinationComponent } from "../components/destination/destination.component";

export const routerConfig: Routes = [
    {
        path: '',
        component: HomeComponent
    }, 
    {
        path: 'destinations',
        component: DestinationComponent
    },
    {
        path: 'photos',
        component: PhotosComponent
    },

];