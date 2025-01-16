import { Routes } from '@angular/router';
import { Ex01Component } from './ex01/ex01.component';
import { Ex02Component } from './ex02/ex02.component';
import { Ex03Component } from './ex03/ex03.component';
import { Ex04Component } from './ex04/ex04.component';
import { Ex05Component } from './ex05/ex05.component';
import { Ex06Component } from './ex06/ex06.component';
import { Ex07Component } from './ex07/ex07.component';
import { Ex08Component } from './ex08/ex08.component';
import { Ex10Component } from './ex10/ex10.component';
import { HomeComponentComponent } from './home-component/home-component.component';

export const routes: Routes = [
    {path:"ex01", component: Ex01Component, title:"" },
    {path:"ex02", component: Ex02Component, title:""},
    {path:"ex03", component: Ex03Component, title:""},
    // {path:"ex04", component: Ex04Component, title:""},
    // {path:"ex05", component: Ex05Component, title:""},
    // {path:"ex06", component: Ex06Component, title:""},
    // {path:"ex07", component: Ex07Component, title:""},
    // {path:"ex08", component: Ex08Component, title:""},
    // {path:"ex09", component: Ex09Component, title:""},
    // {path:"ex10", component: Ex10Component, title:""},
    {path:'', component: HomeComponentComponent, title:''},
];
