import {NgModule} from '@angular/core';
import {MainPageComponent} from './main-page.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
import {AppRoutingModule} from "../../app-routing.module";


@NgModule({
    imports: [
    CarouselModule.forRoot(),
    CommonModule,
    AppRoutingModule,
    ],
    exports: [MainPageComponent],
    declarations: [MainPageComponent],
})

@Component({
    selector: 'demo-carousel-caption',
    templateUrl: './main-page.component.html',
    
})

export class MainPageModule{}; 
