import { Injectable } from '@angular/core';

// Création d'un collection de données
export const  LIST = [
  {
    type: 'Légume',
    name: 'Poireau',
    comment: '500gr pour faire une soupe'
  },
  {
    type: 'Fruit',
    name: 'Pomme',
    comment: '500gr pour faire du jus'
  },
  {
    type: 'Divers',
    name: 'Lait',
    comment: '1 litre pour le petit déjeuner'
  },
  {
    type: 'Divers',
    name: 'Riz',
    comment: '1 kilo pour le dîner'
  }
]

@Injectable()
export class GroceryService {

  constructor() { }

  // Création d'une fonction pour afficher la collection de données
  getGroceryList(): Promise<any[]>{
    return Promise.resolve(LIST);
  };

  // Création d'une fonction pour ajouter un objet dans la collection de données
  pushNewItem(itemObject){
    // Faire un push avec l'objet récupéré depuis la vue
    LIST.push(itemObject)
  }

}
