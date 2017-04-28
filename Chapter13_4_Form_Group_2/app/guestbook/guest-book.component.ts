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
        id: new FormControl('guest', Validators.required),
        password: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])),
        desc: new FormControl('', Validators.required)
    });

    constructor ( private route: ActivatedRoute, private router:Router ) { }

    onSubmit(form) {
        console.log(form.value);
    }


}