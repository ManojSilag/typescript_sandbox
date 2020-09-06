"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LinkedList_1 = require("./LinkedList");
// const numberCollection = new NumbersCollection([10,3,-5,0])
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data);
// const characterCollection = new CharacterCollection("manoj")
// const sorter = new Sorter(characterCollection);
// sorter.sort();
// console.log(characterCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(570);
linkedList.add(-20);
linkedList.add(0);
var sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
