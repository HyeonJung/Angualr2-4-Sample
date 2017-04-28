/**
 * Created by minchangjang on 2017. 4. 19..
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { } from '@angular/forms';

@Component({
    selector: 'guest-book',
    templateUrl: 'app/guestbook/guest-book.component.html'
})
export class GuestBookComponent {

    guestForm:FormGroup = new FormGroup({
        id: new FormControl('guest', Validators.compose([validNumber])),
        password: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])),
        desc: new FormControl('', Validators.required)
    });

    constructor ( private route: ActivatedRoute, private router:Router ) { }

    onSubmit(form) {
        console.log(form.value);
    }
}

function validNumber(c: FormControl) {
    if ( c.value == "" ) {
        return {
            valid: false,
            errorMsg: "필수값입니다."
        };
    }

    let NUMBER_REGEXP = /^[0-9]+$/;
    return NUMBER_REGEXP.test(c.value) ? {
        valid: true,
        errorMsg: ''
    } : {
        valid: false,
        errorMsg: '숫자가 아닙니다.'
    };
}
