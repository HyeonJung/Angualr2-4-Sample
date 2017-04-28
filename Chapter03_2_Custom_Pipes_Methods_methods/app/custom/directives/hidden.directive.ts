/**
 * Created by minchangjang on 2017. 4. 17..
 */
import { Directive, ElementRef,Renderer } from '@angular/core';
//import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


// Directive decorator
@Directive({ selector: '[myHidden]' })
// Directive class
export class HiddenDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {
        // Use renderer to render the element with styles
        renderer.setElementStyle(el.nativeElement, 'display', 'none');
    }
}