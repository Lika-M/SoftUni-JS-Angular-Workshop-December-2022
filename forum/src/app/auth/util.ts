import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const regExp = /^(.){6,}(@gmail\.)(com|bg)$/;

    if (!value) {
        return null;
    }

    if (!regExp.test(value)) {
        return {
            email: true
        };
    }
    return null;
}

// with closure
export function passMatch(passFormControl: AbstractControl) {
   const validatorFn:ValidatorFn =(repassFormControl: AbstractControl) => {
        if (passFormControl.value !== repassFormControl.value) {
            return {
                // error name
                passMatch: true
            }
        }
        return null;
    }
    return validatorFn;
}

// Second option, with parent -> group
export function passMatch2(passFormControl: AbstractControl): ValidationErrors | null {
    const passGroup = passFormControl.parent as FormGroup;
    
    if (!passGroup) {
        return null;
    }

    // console.log(passGroup);

    const { password, rePassword } = passGroup.controls;

    if (password.value !== rePassword.value) {
        return {
            passMatch: true
        }
    }

    return null
}