import Node from './Node';


export default class Tree {
  constructor() {
    this.root = new Node();
    this.counter = 0;
  }

  insert(data) {
    let currentNode = this.root;
    const array = [...data];

    while (array.length) {
      let character = array.shift();
  
      if (!currentNode.children[character]) {
        
        currentNode.children[character] = new Node(character);
      }
      currentNode = currentNode.children[character];
    }

    if (!currentNode.completedWord) {
      this.counter++;
      currentNode.completedWord = data;
    }
  }
  count(data)  {
    return this.counter;
  }

  populate(dictionary) {
    dictionary.forEach(word => {
      this.insert(word)
    })

  }

  suggest(prefix) {
    let suggestions = [];
    let currentNode = this.root;
    let prefixName = [...prefix.toLowerCase()];

    prefixName.forEach(character => {
     currentNode = currentNode.children[character]
    })

    const search = (node) => {

      if (node.completedWord) {
        suggestions.push(node.completedWord);

      }
      let nodeKeys = Object.keys(node.children)

      nodeKeys.forEach(key => {
        search(node.children[key])
      })
}
search(currentNode);
return suggestions;
}
}
