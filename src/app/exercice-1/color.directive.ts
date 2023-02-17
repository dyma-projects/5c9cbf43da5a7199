import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostBinding('style.backgroundColor') color: string | null = null;

  @HostListener('document:keydown', ['$event'])  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == "ArrowDown"){
      console.log("bas");
      this.el.nativeElement.style.color="red";

    } else if (event.key == "ArrowUp"){
      console.log("haut");
      this.el.nativeElement.style.color="blue";
    } else if (event.key == "ArrowRight"){
      console.log("droite");
      this.el.nativeElement.style.color="yellow";
    } else if (event.key == "ArrowLeft"){
      console.log("gauche");
      this.el.nativeElement.style.color="green";
    } else {
      console.log(event);
      this.el.nativeElement.style.color="black";
    }

  }





  constructor(private el: ElementRef<HTMLParagraphElement>) {

  }

}
