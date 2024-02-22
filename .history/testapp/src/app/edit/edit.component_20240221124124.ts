import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {HttpClientModule,HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
ime: string="";
priimek: string="";
datum_rojstva:string=""
aktiven:boolean=false
opis=""


constructor(private router:Router,private http:HttpClient){

}
ngOnInit(): void {
  
}

onRegisterDubmit(){
  const user =
  {
    ime: this.ime,
    priimek: this.priimek,
    datum_rojstva:this.datum_rojstva,
    aktiven:this.aktiven,
    opis:this.opis
  }
  let headers = new HttpHeaders();
  headers = headers.append('Content-Type','application/json');
   this.http.post('http://localhost:3000/users/register',user,{headers : headers})
   .pipe(map((res: any) => res));
}
}
