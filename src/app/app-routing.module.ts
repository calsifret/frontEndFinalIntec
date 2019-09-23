import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { from } from 'rxjs';
import { AppComponent } from './app.component';

const routes: Routes =[
    {path:'', redirectTo:'/appComponent', pathMatch: 'full'},
    {path: 'appComponent', component: AppComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    
})
export class AppRoutingModule { }
