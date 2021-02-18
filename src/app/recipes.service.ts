import { Injectable } from '@angular/core';
import { RecipeModel } from './recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes: RecipeModel[] = [
    new RecipeModel("Spaghetti alla chitarra", "Un particolare tipo di pasta che...", "https://www.lucianopignataro.it/wp-content/uploads/2018/10/Il-Boccon-Divino-Spaghetti-alla-chitarra-con-guanciale-di-nero-casertano-e-cipolla-di-Alife.jpeg"),
    new RecipeModel("Lasagne alla bolognese", "Tipico piatto della domenida in Italia centrale...", "https://www.tribugolosa.com/media/lasagne-622x466_crop.jpg/rh/lasagne-alla-bolognese.jpg"),
    new RecipeModel("Tiramisù", "Dolce a base di mascarpone e...", "https://static.cookist.it/wp-content/uploads/sites/21/2019/01/istock-928035242-638x425.jpg")
  ];

  constructor() { }
}
