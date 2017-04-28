/**
 * Created by minchangjang on 2017. 4. 19..
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'guest-book',
    templateUrl: 'app/guestbook/guest-book.component.html'
})
export class GuestBookComponent {

    constructor ( private route: ActivatedRoute, private router:Router ) { }

    onSubmit(form) {
        console.log(form.value);
    }


}