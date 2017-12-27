import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FAQRoutes} from './faq/faq.route';

const routes: Routes = [
    ...FAQRoutes
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
