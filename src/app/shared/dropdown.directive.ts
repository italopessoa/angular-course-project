import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  // isOpen: boolean = false;
  @HostListener('click') click() {
    this.isOpen = !this.isOpen;
    //   if (this.isOpen) this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    //   else this.renderer.addClass(this.elementRef.nativeElement, 'open');
    //   this.isOpen = !this.isOpen;
  }
}
