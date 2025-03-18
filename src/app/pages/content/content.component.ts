import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  name:string="Felipe Silva"
  gameName:string = ""
  photoCover: string = ""
  contentTitle: string = ""
  contentDescription: string = ``

  private route = inject(ActivatedRoute);
  private id: string | null = "0";

  constructor() {
    // Atualiza o id com base na rota paramMap
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.setValuesToComponent(this.id); // Passa o id para a função
    });
  };

  // Função que busca os dados de acordo com o id
  setValuesToComponent(id: string | null) {
      const result = dataFake.filter(article => article.id.toString() === id)[0];
      this.gameName= result.gameName
      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photo


  }
}