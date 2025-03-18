import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrls: [
    './small-card.component.css',
    './small-card.component.responsive.css'
  ]
})
export class SmallCardComponent {
  @Input () Id:string=""
  @Input () gameName:string=""
  @Input () photoCover:string=""
  @Input () cardTitle:string=""
  @Input () cardDescription:string=""
}
