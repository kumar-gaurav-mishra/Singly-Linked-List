# Singly-Linked-List

Javascript Implementation of Singly Linked List

### Installation & Usage :

```Installation

npm install js-singly-linked-list

```

```Javascript

 const SinglyLinkedList = require('js-singly-linked-list');
 let list = new SinglyLinkedList();

 list.push(1); //Pushes value to the list
 list.pop(); // Delete value from the end of the list
 list.shift(); // Delete value from the start of the list
 list.unshift(1); // Adds value at the start of the list
 list.get(1); // Retrives value at the given index
 list.reverse(); // Reverses the list
 list.insert(1, 20); // list.insert(index, value) -> Inserts value at the given index
 list.set(1, 12); // list.set(index, value) ->  Replaces or set's value at the given index
 list.length; // Gives you length of the list
 list.head; // Gives you head of the list
 list.tail; // Gives you tail of the list

```
