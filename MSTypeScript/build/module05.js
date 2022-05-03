"use strict";
/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */
/*  EXERCISE 1 */
class BuildArray {
    // TODO Define the constructor
    constructor(items, sortOrder) {
        // TODO Define the methods
        this.sortDescente2 = (a, b) => {
            if (a > b) {
                return -1;
            }
            else if (b > a) {
                return 1;
            }
            else {
                return 0;
            }
        };
        this.sortAscente2 = (a, b) => {
            if (a > b) {
                return -1;
            }
            else if (b > a) {
                return 1;
            }
            else {
                return 0;
            }
        };
        this._items = items;
        this._sortOrder = sortOrder;
    }
    // TODO Define the accessors
    get items() {
        return this._items;
    }
    set items(items) {
        this._items = items;
    }
    get sortOrder() {
        return this._sortOrder;
    }
    set sortOrder(sortOrder) {
        this._sortOrder = sortOrder;
    }
    buildArray() {
        let randomNumbers = [];
        let nextNumber;
        for (let contador = 0; contador < this.items; contador++) {
            nextNumber = Math.ceil(Math.random() * (100 - 1));
            if (randomNumbers.indexOf(nextNumber) === -1) {
                randomNumbers.push(nextNumber);
            }
            else {
                contador--;
            }
        }
        if (this._sortOrder === 'ascendente') {
            return randomNumbers.sort(this.sortAscente2);
        }
        else {
            return randomNumbers.sort(this.sortDescente2);
        }
    }
}
let testArray1 = new BuildArray(12, 'ascendente');
let testArray2 = new BuildArray(8, 'descendente');
console.log(testArray1.buildArray());
console.log(testArray2.buildArray());
