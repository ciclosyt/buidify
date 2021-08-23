import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Handsontable from 'handsontable';
import { ApiService } from '../../api/service/api.service';
import { Datum, Tiempo } from '../../api/interface/api-interface';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
    *, body {
      padding: 15px;
      
    
    }

    .container-fluid {
       min-height: 100vh;
        background-image: url('../assets/images/bg-01.jpg')
    }

    
    `
  ]
})
export class DashboardComponent implements OnInit {


  servicio: Tiempo[] = []




  get usuario(){
    return this.authService.usuario
  }

  constructor( private router: Router,
                private authService: AuthService,
                private apiService: ApiService ) { }

  ngOnInit(): void {

    
    
     
  }


  info(){

    this.apiService.tiempo()
    .subscribe( resp => {
      console.log(resp);

      this.servicio = resp
      console.log(this.servicio);
      
    } );
  
  }




  logout(){
    this.authService.logOut();
    this.router.navigateByUrl('/auth/login')
  }

  

  
}
