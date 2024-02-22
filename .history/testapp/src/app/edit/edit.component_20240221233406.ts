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
              //private toastr: ToastrService
    ){  
   }
    
  

  
  
    ngOnInit(): void {
   
    
  }

  

  async onSubmit(){
    console.log(this.userToEdit)
    if (this.userToEdit == null)
    {
      /*post*/
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type','application/json');
      const user ={
        ime:  this.ime,
        priimek: this.priimek,
        datum_rojstva: this.datum_rojstva.toString(),
        aktiven:this.aktiven,
        opis:this.opis
      }
      await this.http.post('http://localhost:3000/users/register',user,{headers : headers})
       .pipe(map((res: any) => res));
      //this.toastr.success('You are now registered.', 'Success!');

    }
    else{
        /*put*/
        let headers = new HttpHeaders();
      headers = headers.append('Content-Type','application/json');
      const user ={
        ime:  this.ime,
        priimek: this.priimek,
        datum_rojstva: this.datum_rojstva.toString(),
        aktiven:this.aktiven,
        opis:this.opis
      }
      await this.http.put('http://localhost:3000/users/update/'+this.userToEdit.id,user,{headers : headers})
       .pipe(map((res: any) => res));
      //this.toastr.success('You are now registered.', 'Success!');
    }
    }
}

