import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { setTimeout } from "tns-core-modules/timer";

import * as dialog from "tns-core-modules/ui/dialogs";

@Component({
    selector: 'skip',
    templateUrl: 'skip.component.html'
})

export class SkipComponent implements OnInit {
    linkIMG: String;

    constructor(
        private page: Page,
        private fb: FormBuilder,
        private ls: LoginService,
        private router: RouterExtensions,
    ) {
        page.actionBarHidden = true;
    }

    ngOnInit() {
        setTimeout(() => {
            this.linkIMG = "~/app/images/patronus.jpg";

            setTimeout(() => {
                this.router.navigate(["/home"], { clearHistory: true });
            }, 2000);
        });


    }
}
