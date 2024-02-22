import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

  title = 'testapp';
  osebeList: {
    ime:string,
    priimek:string,
    datum_rojstva:string
    aktiven:boolean,
    opis:string}[] =[];
}

