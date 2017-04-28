/**
 * Created by minchangjang on 2017. 4. 17..
 */
import { NgModule }       from '@angular/core';
import { OrdinalPipe} from './pipes/ordinal.pipe';
import { MyDatePipe } from './pipes/mydate.pipe';
import { HiddenDirective } from './directives/hidden.directive';
import { UnderlineDirective } from './directives/underline.directive';
import { ColorDirective } from './directives/color.directive';

import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [ OrdinalPipe,MyDatePipe,HiddenDirective ],
    exports : [ OrdinalPipe,MyDatePipe,HiddenDirective ]
})
export class CustomModule {}