import { Component, Input, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { FormControl, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {HttpClientModule,HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';
import {provideNativeDateAdapter} from '@angular/material/core';
import { iUporabnik } from '../../../../uporabnik';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  providers: [provideNativeDateAdapter()],

})
export class EditComponent implements OnInit {
@Input() userToEdit:iUporabnik | null = null;
  ime=''
  priimek=''
  datum_rojstva=''
  aktiven=false
  opis=''

  
  constructor(private router:Router,
              private http:HttpClient,
              private formBuilder: FormBuilder,
    ){  
   }
    
  

  
  
    ngOnInit(): void {
   
    
  }

  

  onSubmit(): void{
    /*let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    let all_users = await this.http.put('http://localhost:3000/users/all',this.userToEdit,{headers:headers}).pipe(map((res:any)=>res));*/
    

    }
    





}

