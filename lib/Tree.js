import Node from './Node';


export default class Tree {
  constructor() {
    this.root = new Node()
  }
  insert(data) {
    let currentNode = this.root;
    const array = [...data];

 
    while (array.length) {
      let character = array.shift();
      currentNode.children[character] = new Node(character);
      currentNode = currentNode.children[character];
    }

    
  }
}