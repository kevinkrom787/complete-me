import Node from './Node';


export default class Tree {
  constructor() {
    this.root = new Node()
    this.counter = 0
    // this.suggestions = [];
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
    currentNode.completedWord = data;
    this.count()
  }
  count(data)  {
    this.counter++
    console.log(this.counter);
    return this.counter;
 
  }

  populate(array) {
    while(array.length) {
      let string = array.shift();
      this.insert(string)
    }

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
     console.log(node.children)

      nodeKeys.forEach(key => {
        search(node.children[key])
      })
}
search(currentNode);
console.log(suggestions)
return suggestions;
}
}
// search()