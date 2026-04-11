import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactiveforms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveforms.html',
  styleUrl: './reactiveforms.css',
})
export class Reactiveforms {

  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required,Validators.email]),
    password : new FormControl('',[Validators.minLength(8),Validators.required]),
    confirmPassword : new FormControl('',[Validators.minLength(8),Validators.required]),
    
    currency : new FormControl(),
    gender : new FormControl(),
    tandc : new FormControl(),
    skills : new FormArray([]),
  })

  handleSubmit(){
    console.log(this.loginForm.value);
    console.log(this.loginForm);
    
  }
  
  public get skills()  {
    return this.loginForm.get('skills') as FormArray;
  }

  handleCheckBoxes(event :Event){
    let input = event.target as HTMLInputElement;
    if(input.checked){
      this.skills.push(new FormControl(input.value))
    }else{
      let index = this.skills?.controls.findIndex((ele)=> ele.value == input.value);
      this.skills.removeAt(index);
    }
  }
  
}
export function chackPass(control:AbstractControl):ValidationErrors {
  let a = false,b = false;
  let alphaNum = control.value.split('').forEach((ele:string) => {
    if((ele>='a' && ele <'z') || (ele>='A' && ele <'Z')){
      a = true;
    }
    if(ele >='0' && ele <'9'){
      b = true;
    }

   
  });
   if(!(a && b)){
      return {
        message : 'Entr an aplha numeric password'
      }
    }
    return {}
  }
