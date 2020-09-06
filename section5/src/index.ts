import { Sorter }from "./Sorter";
import { NumbersCollection } from "./NumberCollection"
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";



// const numberCollection = new NumbersCollection([10,3,-5,0])
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data);

// const characterCollection = new CharacterCollection("manoj")
// const sorter = new Sorter(characterCollection);
// sorter.sort();
// console.log(characterCollection.data);


const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(570);
linkedList.add(-20);
linkedList.add(0);
const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print()
