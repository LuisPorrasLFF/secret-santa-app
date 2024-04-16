import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(nameRe: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.includes(control.value.toLowerCase());
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}