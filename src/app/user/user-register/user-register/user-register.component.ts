import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{

  registrationForm!: FormGroup;
  user!: User;
  userSubmitted!: boolean;

  constructor (private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
  //   this.registrationForm = new FormGroup({
  //     userName: new FormControl(null, Validators.required),
  //     email: new FormControl(null, [Validators.required, Validators.email]),
  //     password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  //     confirmPassword: new FormControl(null, [Validators.required]),
  //     mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
  // }, this.passwordMatchingValidator);
  this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, {validators: this.passwordMatchingValidator});
  }

  passwordMatchingValidator(control: AbstractControl) : ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : {notmatched: true};
  }

  // Getter methods for all FormControls
  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit() {
    console.log(this.registrationForm.value);

    this.userSubmitted = true;

    if(this.registrationForm.valid) {
      // this.user = Object.assign(this.user, this.registrationForm.value);

      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
    }
  }

  //method to map the form value in our domain model
  userData(): User {
    return this.user = {
      //this.userName is from the getter method
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }
  
}
