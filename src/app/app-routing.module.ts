import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

const routes: Routes =[
    {path:'', redirectTo:'/userComponent', pathMatch: 'full'},
    {path: 'appComponent', component: AppComponent},
    {path: 'userComponent', component: UserComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    
})
export class AppRoutingModule { }
