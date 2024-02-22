import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {iUporabnik} from '../../../uporabnik'
import {HttpClient} from '@angular/common/http';
import {HttpClientModule,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
}) 


export class AppComponent implements OnInit {
  displayedColumns: string[]= ['ime','priimek','datum_rojstva','aktiven'];
   

  
  constructor(private http:HttpClient){

  }
  headers = new HttpHeaders({
    'Content-Type':'application/json'
  });

  title = 'testapp';
  
  all_users =  this.http.get<iUporabnik[]>('http://localhost:3000/users/all',{headers:this.headers}).pipe(map((res:any)=>res));
  dataSource= this.all_users
  clickedRows = new Set<iUporabnik>();
  
   ngOnInit() {
  
}


}

 




