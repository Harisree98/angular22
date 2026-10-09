import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {

  count= 0;

  constructor(private el:ElementRef){

  }

  // @HostListener('mouseenter')
  // onMouseEnter(){
  //   this.el.nativeElement.style.backgroundColor = "red";
  // }

  // @HostListener('mouseleave')
  // onMouseLeave(){
  //   this.el.nativeElement.style.backgroundColor = 'green'
  // }

  // @HostListener("click")
  // onClick(){
  //   this.count++;
  //   console.log("count",this.count);
  // }

  @HostListener('focus')
  onFocus(){
    this.el.nativeElement.style.border = '2px solid green';
  }

  @HostListener('blur')
  onBlur() {
    this.el.nativeElement.style.border = '';
  }

}
