import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { OrdinalPipe} from './custom/pipes/ordinal.pipe';
import { MyDatePipe } from './custom/pipes/mydate.pipe';
import { HiddenDirective } from './custom/directives/hidden.directive';
import { UnderlineDirective } from './custom/directives/underline.directive';
import { ColorDirective } from './custom/directives/color.directive';

@Component({
    selector: 'my-app',
    template: ` <h1>Custom Directive 예제</h1>
                <h1 myHidden>Hidden Welcome</h1>
                <h2> <span myUnderline>Hover to underline</span> </h2>
                <h1 mycolor> Let's 'Hover' me!</h1>

                <h2>날짜변환 : {{dateStr|mydate:'/'}} <br>
                    날짜변환 : {{dateStr|mydate:'-'}} <br></h2>
                <div>
                    <ul>
                        <li *ngFor="let num of numbers">
                            {{ num | ordinal }}
                        </li>
                    </ul>
                </div>
                `
})
class AppComponent {
    val = true;
    dateStr = "20161020";
    numbers = [
        1,2,3,4,5,6,7,8,9,10,
        11,12,13,14,15 ];

    constructor() {
        var dt = new Date();

        var month = dt.getMonth()+1;
        var day = dt.getDate();
        var year = dt.getFullYear();
        this.dateStr = year+''+month+''+day;
    }
}

@NgModule({
    declarations: [AppComponent, OrdinalPipe, MyDatePipe, HiddenDirective, UnderlineDirective, ColorDirective],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);