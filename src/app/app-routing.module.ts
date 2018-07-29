import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';

const routes: Routes = [
    { path: '', redirectTo: 'a', pathMatch: 'full' },
    { path: 'a', component: AComponent },
    { path: 'b', component: BComponent },
    // { path: 'book-details/:id', component: BookDetailsComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {


}
