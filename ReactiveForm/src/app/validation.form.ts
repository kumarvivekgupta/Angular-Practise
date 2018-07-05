import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

import {Subscription} from 'rxjs';


export class CustomValidators {
  static greaterLength(outercore: AbstractControl): ValidatorFn {
    let valueSubscription: Subscription;
    return (control: AbstractControl): ValidationErrors => {
      if (!valueSubscription) {
        valueSubscription = outercore.valueChanges.subscribe(() => control.updateValueAndValidity());
      }
      if (!outercore || control.value && control.value.valueOf().toString().length > outercore.value.toString().length) {
        return null;
      } else {
        return {error: 'length is short'};
      }
    };
  }

}
