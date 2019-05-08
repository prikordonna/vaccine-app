import {NgModule} from '@angular/core';
import {MainPageComponent} from './main-page.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
import {AppRoutingModule} from "../../app-routing.module";
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
    imports: [
    CarouselModule.forRoot(),
    CommonModule,
    AppRoutingModule,
    PopoverModule.forRoot(),
    ],
    exports: [MainPageComponent],
    declarations: [MainPageComponent],
})

@Component({
    selector: 'demo-carousel-caption',
    templateUrl: './main-page.component.html',
    
})

export class MainPageModule{}; 
