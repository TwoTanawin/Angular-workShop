import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { NgOptimizedImage } from '@angular/common'
import Swal from 'sweetalert2';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private meta = inject(Meta)

  // FromGroup
  loginForm!: FormGroup

  //check submitt form
  submitted = false

  hide = true

  // valiable for transfer data with form
  userLogin = {
    "email": "",
    "password": "",
  }

  @ViewChild('emailInput') emailInput!: ElementRef

  // Constructor
  constructor(
    private formBuilder: FormBuilder
  ) { }

  // ngOninit
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

  }
  submitLogin() {
    this.submitted = true
    // form invalid
    if (this.loginForm.invalid) {
      return
    } else {
      this.userLogin.email = this.loginForm.value.email
      this.userLogin.password = this.loginForm.value.password
      if (this.userLogin.email == "test@test.com" && this.userLogin.password == "123456") {
        // alert("Login Success")
        Swal.fire({
          title: 'เข้าสู่ระบบสำเร็จ',
          text: 'ยินดีต้อนรับเข้าสู่ระบบ Stock Management',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      }
      else {
        // alert("Login Fail")
        Swal.fire({
          title: 'มีข้อผิดพลาด',
          text: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    }
  }

  resetForm() {
    this.submitted = false
    this.loginForm.reset()


    // document.getElementById('email')?.focus()
    this.emailInput.nativeElement.focus()
  }

  togglePasswordVisibility(){
    this.hide = !this.hide
  }
}
