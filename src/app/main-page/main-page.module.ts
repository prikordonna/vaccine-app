import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

import { MainPageComponent } from './main-page.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from "../app-routing.module";
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
    imports: [
        CarouselModule.forRoot(),
        CommonModule,
        AppRoutingModule,
        PopoverModule.forRoot(),
    ],
    exports: [
        MainPageComponent
    ],
    declarations: [
        MainPageComponent
    ],
})

export class MainPageModule { };
