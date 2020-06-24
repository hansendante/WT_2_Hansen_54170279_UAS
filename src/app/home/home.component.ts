import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterExtensions } from 'nativescript-angular/router';
import * as utils from "tns-core-modules/utils/utils";
import * as dialog from "tns-core-modules/ui/dialogs";

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    user: User = { username: "username", password: "password" };
    loginForm: FormGroup = this.fb.group({
        username: [this.user.username, [Validators.required]],
        password: [this.user.password, [Validators.required]],
    })

    username = this.loginForm.get("username");
    password = this.loginForm.get("password");

    constructor(
        private page: Page,
        private fb: FormBuilder,
        private router: RouterExtensions,
    ) {
        page.actionBarHidden = true;
    }

    ngOnInit() {
     
    }
    onTap(name:String){
        switch (name) {
            case "wizard":
                utils.openUrl("https://my.wizardingworld.com/register");
                break;
            case "quiz":
                utils.openUrl("https://www.wizardingworld.com/quiz");
                break;
            case "harry":
                this.router.navigate(["/harryporter"]);
                break;
            case "sortinghat":
                utils.openUrl("https://my.wizardingworld.com/sorting-hat");
                break;
            case "wand":
                utils.openUrl("https://my.wizardingworld.com/ceremony-interstitial/wand");
                break;
            case "patronus":
                utils.openUrl("https://my.wizardingworld.com/patronus");
        
            default:
                break;
        }
    }
}
