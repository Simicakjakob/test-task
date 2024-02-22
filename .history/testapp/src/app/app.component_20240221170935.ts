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
   
  constructor(private http:HttpClient){

  }
  headers = new HttpHeaders({
    'Content-Type':'application/json'
  });

  title = 'testapp';
  user_data: iUporabnik[] = this.http.get('http://localhost:3000/users/',{headers : this.headers})
  .pipe(map((res: any) => res));
}

  clickedRows = new Set<iUporabnik>();




function ngOnInit() {
  throw new Error('Function not implemented.');
}

