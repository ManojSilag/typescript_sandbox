"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
// const numberCollection = new NumbersCollection([10, 3, -5, 0]);
// numberCollection.sort();
// console.log(numberCollection.data);
// const characterCollection = new CharacterCollection("manoj")
// characterCollection.sort();
// console.log(characterCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(570);
linkedList.add(-20);
linkedList.add(0);
linkedList.sort();
linkedList.print();
