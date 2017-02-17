import { Component, OnInit } from '@angular/core';

// 1# Importer le service
import { GroceryService } from './services/grocery.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  // 2# ajouter le service dans le tableau des providers
  providers: [ GroceryService ]

})
export class AppComponent implements OnInit {

  // 3# Créer une variable pour le service
  constructor(
    private groceryService: GroceryService
  ){}

  // Création d'une variable pour le titre du composant
  title = 'Ma liste de courses';

  // Création d'une variable vide pour récupérer les données depuis le service
  myCollection;

  // Création d'un objet VIDE pour le passer en ngModel dans le formulaire
  newItem = {
    type: '',
    name: '',
    comment: ''
  }

  // Créer une fonction pour ajouter un élément dans la liste
  addNewItem(object){

    // Ajouter l'objet à la collection de données du service
    this.groceryService.pushNewItem(object);

    // Vider le formulaire
    this.resetForm();

    // Réinitialisation de l'objet
    this.newItem = {
      type: '',
      name: '',
      comment: ''
    }

  }

  // Fonction pour vider le formulaire
  resetForm(){
    document.querySelector('form').reset();
  }

  ngOnInit(){
    this.groceryService.getGroceryList().then(data => this.myCollection = data);
  }


}
