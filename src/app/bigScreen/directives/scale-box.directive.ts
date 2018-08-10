import {Directive, Input, ElementRef} from '@angular/core';
import {scale} from '../service/scale.service';

@Directive({
  selector: '[appScaleBox]'
})
export class ScaleBoxDirective {

  @Input('appScaleBox')
  appScaleBox: any;
  @Input('scaleDiv')
  scaleDiv: any;

  constructor(
              private el: ElementRef) {
  }

  ngOnInit() {
    this.setStyle();
    scale.sizeChangObservable.subscribe(value => {
      this.setStyle();
    });
  }

  setStyle() {
    this.el.nativeElement.style.position = 'absolute';
    this.el.nativeElement.style.width = (scale.widthScale * this.appScaleBox.width) + 'px';
    this.el.nativeElement.style.height = (scale.heightScale * this.appScaleBox.height) + 'px';
    if (this.scaleDiv) {
      this.el.nativeElement.style.top = scale.heightScale * this.appScaleBox.top + 'px';
      this.el.nativeElement.style.left = scale.widthScale * this.appScaleBox.left + 'px';
    } else {
      this.el.nativeElement.style.top = (scale.heightScale * this.appScaleBox.top + scale.top) + 'px';
      this.el.nativeElement.style.left = (scale.widthScale * this.appScaleBox.left + scale.left) + 'px';
    }
    
  }
}
