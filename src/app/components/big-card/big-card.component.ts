import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrls: [
    './big-card.component.css',
    './big-card.component.responsive.css'
  ]
})
export class BigCardComponent {
  @Input () Id:string=""
  @Input () gameName:string=""
  @Input () photoCover:string=""
  @Input () cardTitle:string=""
  @Input () cardDescription:string=""
        
} 
