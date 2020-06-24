import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { LoginService } from '../login/login.service';
import { Page } from 'tns-core-modules/ui/page/page';
import * as utils from "tns-core-modules/utils/utils";

@Component({
    selector: 'shell',
    templateUrl: 'shell.component.html',
    styleUrls: ['./shell.component.css']
})

export class ShellComponent implements OnInit {
    constructor(private ls: LoginService, private router: RouterExtensions, private page: Page) {
        page.actionBarHidden = true;
     }

    logout() {
        this.ls.logout();
        this.router.navigate(["login"], { clearHistory: true });
    }
    login(){
        this.router.navigate(["about"], { clearHistory: true });
    }
    onTap(name:String){
        switch (name) {
            case "site":
                utils.openUrl("https://www.wizardingworld.com/");
                break;
            case "logout":
                this.router.navigate(["/login"]);
                break;
            case "about":
                this.router.navigate(["/about"]);
                break;
            case "home":
                this.router.navigate(["/home"]);
                break;
            case "cryptic":
                utils.openUrl("https://www.wizardingworld.com/features/wizarding-world-cryptic-crossword");        
            default:
                break;
        }
    }
    ngOnInit() { }
}