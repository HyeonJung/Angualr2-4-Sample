/**
 * Created by minchangjang on 2017. 4. 17..
 */
import { Directive, ElementRef, HostListener, Injectable } from '@angular/core';
@Directive({
    selector:'[mycolor]'
})
@Injectable()
export class ColorDirective {
    private defaultColor:string = 'blue';
    constructor(private el: ElementRef) {
        this.el = el;
        this.setColor(this.defaultColor);
    }

    private setColor(color: string) {
        this.el.nativeElement.style.color = color;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.hover('green');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.hover(this.defaultColor);
    }
    // Event method to be called on mouse enter and on mouse leave
    hover(color: string){
        this.setColor(color);
    }
}