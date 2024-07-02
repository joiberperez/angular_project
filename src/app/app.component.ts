import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  private http = inject(HttpClient);
  public user!:string
  ngOnInit(): void {
    this.http.get('api/usuarios/1/').subscribe((valor:any)=>{
      this.user = valor.id;
    })
  }

}
