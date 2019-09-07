import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ShouldMatch } from './validator'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form: FormGroup;
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  passwordRegEx = '^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
  mobileNoRegEx = '^[0-9]{10}$';

  constructor(private fb:FormBuilder){
    this.form= this.fb.group({
      email: ['',[ Validators.required, Validators.email, Validators.pattern(this.emailRegEx)
      ]],
      password: ['', [Validators.required,Validators.minLength(8), Validators.maxLength(30), Validators.pattern(this.passwordRegEx) 
      ]],
      cnfpass: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.mobileNoRegEx)]]

    },{
      validator: ShouldMatch('password', 'cnfpass')
  })
  }
  
    // get firstname(){
    //   return this.form.get('firstName')
    // }
    
    ngOnInit() {
    }
  
    onSubmit(){
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value))
      console.log(this.form.value)
    }
}
