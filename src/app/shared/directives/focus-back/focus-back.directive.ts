import { Directive } from "@angular/core";

@Directive({
  selector: '[focus-back]'
})

export class FocusBackDirective {

  private lastFocusedElement: Element;

  public ngOnInit(): void {

    this.lastFocusedElement = document.activeElement;

  }

  ngOnDestroy() {
    if (this.lastFocusedElement){
      (this.lastFocusedElement as HTMLElement).focus();
    }
  }
}
