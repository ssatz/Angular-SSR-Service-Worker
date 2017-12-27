import {Routes} from "@angular/router";
import {FAQComponent} from "./faq.component";
import {FAQResolver} from "./faq.resolve";
export const FAQRoutes:Routes = [
    {
        path:'faq',
        component:FAQComponent,
        resolve:{faqs:FAQResolver}
    }
];