import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
}) 
 interface Iuser {
    ime:string,
    priimek:string,
    datum_rojstva:string,
    aktiven:boolean,
    opis:string
  }

export class AppComponent implements OnInit {
   

  title = 'testapp';
  user_data: Iuser[] =[]

  clickedRows = new Set<Iuser>();



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

 
}

