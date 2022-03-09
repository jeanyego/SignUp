import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !:FormGroup;
  constructor(private formBuilder : FormBuilder,private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      Email:['', Validators.email],
      Password:['', Validators.required],
    })
  }
signUp(){
  this.http.post<any>("http://localhost:3000/posts", this.signupForm.value)
    .subscribe(res=>
      {
        alert("SignUp SuccessFull");
        this.signupForm.reset();
        this.router.navigate(['dashboard']);
      }, (err: any)=>{
        alert("Something went wrong")
      } )
}
}
