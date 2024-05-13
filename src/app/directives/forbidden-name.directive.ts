import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(nameRe: string[], exception: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let forbidden = true;
    if(control.value.toLowerCase() === exception.toLocaleLowerCase()){
      forbidden = false;
    }
    else{
      forbidden = nameRe.includes(control.value.toLowerCase());
    }
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}