import { Linkedlist } from "../index.js";

const list = Linkedlist();

list.prepend("wolf")
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");


console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(2));
// console.log(list.pop());
console.log(list.contains('snake'));
console.log(list.find('snake'));
console.log(list.toString())
console.log(list.insertAt('shit',1))
console.log(list.toString())
console.log(list.removeAt(1))
console.log(list.toString())