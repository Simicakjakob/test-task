import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {iUporabnik} from '../../../uporabnik'
import {HttpClient} from '@angular/common/http';
import {HttpClientModule,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
}) 


export class AppComponent implements OnInit {
   
  constructor(private http:HttpClient){

  }


  title = 'testapp';
  user_data: iUporabnik[] =[]

  clickedRows = new Set<iUporabnik>();



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

 
}

