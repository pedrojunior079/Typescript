"use strict";
/* Módulo 6: Genéricos em TypeScript
     Início do laboratório */
/* DataStore é uma função utilitária que pode armazenar até 10 valores de string em uma matriz.
Reescreva a classe DataStore para que a matriz possa armazenar itens de qualquer tipo.

TODO: Adicione e aplique uma variável de tipo. */
class DataStore {
    constructor() {
        this._data = new Array(10);
    }
    AddOrUpdate(index, item) {
        if (index >= 0 && index < 10) {
            this._data[index] = item;
        }
    }
    GetData(index) {
        if (index >= 0 && index < 10) {
            return this._data[index];
        }
        else {
            return;
        }
    }
}
let cities = new DataStore();
cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(2, "London"); // item not added
cities.AddOrUpdate(11, "New York");
console.log(cities.GetData(11)); // returns 'Chicago'
// TODO Testar itens como números.
let empIDs = new DataStore();
empIDs.AddOrUpdate(0, 50);
empIDs.AddOrUpdate(1, 65);
empIDs.AddOrUpdate(2, 89);
console.log(empIDs.GetData(0)); //retorna 50
let pets = new DataStore();
pets.AddOrUpdate(0, { nome: 'Rex', raça: 'Vira Lata', idade: 5 });
pets.AddOrUpdate(1, { nome: 'Luna', raça: 'Xintzu', idade: 7 });
console.log(pets.GetData(1)); //retorna {nome: 'Luna' raça: 'Xintzu', idade: 7}
