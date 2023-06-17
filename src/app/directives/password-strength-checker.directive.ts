import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPasswordStrengthChecker]',
  exportAs: 'strengthValue'
})
export class PasswordStrengthCheckerDirective {
  strengthValue!:number;
  constructor() { }

  @HostListener('input', ['$event'])
  output(event:InputEvent){
    const e = event.target as HTMLInputElement;
    const value:string = e.value;

    this.strengthValue = this.checkPasswordStrength(value);
  }

  checkPasswordStrength(value:string):number {
    if(value.length > 0 && value.length < 4) return 1;
    else if(value.length > 3 && value.length < 6) return 2;
    else if(value.length > 6) return 3;
    else return 0
  }
}
