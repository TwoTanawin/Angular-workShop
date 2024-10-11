import { Component } from '@angular/core';
import { ReactiveFormsModule, 
         FormsModule,
         FormGroup,
         FormBuilder,
         Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // FromGroup
  loginForm!: FormGroup

  //check submitt form
  submitted = false

  // valiable for transfer data with form
  userLogin = {
    "email": "",
    "password": "",
  }

  // Constructor
  constructor(
    private formBuilder: FormBuilder
  ){}

  // ngOninit
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
    
  }
  submitLogin(){
    this.submitted = true
    // form invalid
    if(this.loginForm.invalid){
      return
    }else{
      this.userLogin.email = this.loginForm.value.email
      this.userLogin.password = this.loginForm.value.password
      if (this.userLogin.email == "test@test.com" && this.userLogin.password == "123456"){
        alert("Login Success")
      }
      else{
        alert("Login Fail")
      }
    }
  }

  resetForm(){
    this.submitted = false
    this.loginForm.reset()

    // document.getElementById('email')?.focus()
  }
}
