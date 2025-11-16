import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// export class PasswordStrengthPattern implements ValidatorFn {
//   validate(control: AbstractControl): ValidationErrors | null {
//     const value = control.value || '';
//     // must include upper, lower, number, and symbol
//     const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(value);
//     return valid ? null : { passwordStrength: true };
//   }
// }

export function passwordStrengthPattern(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';
    const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(value);
     return valid ? null : { passwordStrength: true };
  };
}