/**
 * Created by minchangjang on 2017. 4. 19..
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GuestBookComponent } from './guest-book.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [ GuestBookComponent ]
})
export class GuestBookModule { }