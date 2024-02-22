import { Component, Input, OnInit, Output } from '@angular/core';
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
import { EventEmitter } from 'stream';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  providers: [provideNativeDateAdapter()],

})
export class EditComponent implements OnInit {
@Input() userToEdit:iUporabnik | null = null;
ime_form=''
priimek_form=''
datum_rojstva_form=''
aktiven_form=false
opis_form=''

//@Output() onImeChange = new EventEmitter();
//@Output() onPriimekChange = new EventEmitter();
//@Output() onDatumChange = new EventEmitter();
//@Output() onAktivenChange = new EventEmitter();
//@Output() onOpisChange = new EventEmitter();

  ime_changed(){
   // this.onImeChange.emit(this.ime_form)
  }

  
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
        ime:  this.ime_form,
        priimek: this.priimek_form,
        datum_rojstva: this.datum_rojstva_form.toString(),
        aktiven:this.aktiven_form,
        opis:this.opis_form
      }
      await this.http.post('http://localhost:3000/users/register',user,{headers : headers})
       .pipe(map((res: any) => res)).subscribe();
      //this.toastr.success('You are now registered.', 'Success!');

    }
    else{
        /*put*/
        let headers = new HttpHeaders();
      headers = headers.append('Content-Type','application/json');
      const user ={
        ime:  this.ime_form,
        priimek: this.priimek_form,
        datum_rojstva: this.datum_rojstva_form.toString(),
        aktiven:this.aktiven_form,
        opis:this.opis_form
      }
      try{
        console.log('http://localhost:3000/users/update/'+this.userToEdit._id);
      let result = await this.http.put('http://localhost:3000/users/update/'+this.userToEdit._id,user,{headers : headers})
       .pipe(map((res: any) => res)).subscribe (data => {
        console.log(data);
       });
       

      }catch(err){
        console.log(err);
      }
      
      //this.toastr.success('You are now registered.', 'Success!');
    }
    }
}

