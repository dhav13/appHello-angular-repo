import { Routes } from "@angular/router";
import { FeatureAuth } from "./feature-auth/feature-auth";

export const FEATURE_AUTH_ROUTES: Routes = [
    {
        path: '',
        component: FeatureAuth,
        // pathMatch: "full", => Need to check why we are getting this issue 
        children: [
            {
                path: 'sign-in',
                loadComponent: () => import('./sign-in/sign-in').then((m) => m.SignIn),
            },
            {
                path: 'sign-up',
                loadComponent: () => import('./sign-up/sign-up').then((m) => m.SignUp),
            },
            {
                path:'',
                redirectTo:'sign-in',
                pathMatch:"full"
            }
        ]
    }
    
]