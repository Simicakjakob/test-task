import { Component, Input, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {HttpClientModule,HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  providers: [provideNativeDateAdapter()],

})
export class EditComponent implements OnInit {
@Input() ime: string="";
@Input() priimek: string="";
@Input() datum_rojstva:string=""
@Input() aktiven:boolean=false
@Input() opis=""
@Input() id=""

constructor(private router:Router,private http:HttpClient){

}
ngOnInit(): void {
}

onRegisterSubmit(){
  const user =
  {
    ime: this.ime,
    priimek: this.priimek,
    datum_rojstva:this.datum_rojstva,
    aktiven:this.aktiven,
    opis:this.opis
  };
  const id="";



}
}
