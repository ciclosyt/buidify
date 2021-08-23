import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    name: ['jose',[Validators.required]],
    email: ['test1@test.com',[Validators.email, Validators.required]],
    password: ['123456',[Validators.required, Validators.minLength(6)]]
  })

  constructor( private fb: FormBuilder,
               private router: Router,
               private AuthService: AuthService ) { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.miFormulario.value);
    // console.log(this.miFormulario.valid);

    const { name, email, password } = this.miFormulario.value

    this.AuthService.registro(name, email, password)
      .subscribe( ok => {
        if( ok === true){
          this.router.navigateByUrl('/dashboard')
        } else {

          Swal.fire('error', ok, 'error')
        }
      }
        
      )
      
    
  }

}
