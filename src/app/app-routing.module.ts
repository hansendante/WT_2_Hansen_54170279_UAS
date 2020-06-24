import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { HarryComponent } from "./harrypo/harrypo.component";
import { LoginComponent } from "./login/login.component";
import { ShellComponent } from "./shell/shell.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { SkipComponent } from "./login/skip.component";
const routes: Routes = [
    // Uncomment bawah, kalau mau halaman utama nya login
    // { path: "", redirectTo: "/login", pathMatch: "full" },

    // Uncomment bawah, kalau mau halaman utamnya Skip Login, Pake ini dlu klo login kalian gabisa
    { path: "", redirectTo: "/login", pathMatch: "full" },

    { path: "login", component: LoginComponent },
    {
        path: "",
        component: ShellComponent,
        children: [
            { path: "home", component: HomeComponent },
            { path: "harryporter", component: HarryComponent },
            { path: "about", component: AboutComponent },
            { path: "skip", component: SkipComponent },
        ],
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
