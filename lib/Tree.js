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
      currentNode.completedWord = data;
      this.counter++;
      this.count();
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
// need an array to push nodes/characters into
    let suggestions = [];
// need to start the chain of nodes at the root so you can traverse down tree
    let currentNode = this.root; 
// need the word or character passed in from user (prefix)
// and spread/seperated into letters to be passed into the nodes
    let prefixInput = [...prefix.toLowerCase()];


// iterate over the prefixInput array and grabbing each
// element or letter passed into the prefixInput array
// traverse down the tree adding each child node as the currentNode
// if you put 'dog' in as the prefix, you would see ['d', 'o', 'g']
// and it would move you down to index[2]
    prefixInput.forEach(letter => {
      currentNode = currentNode.children[letter]
    })

const search = (currentNode) => {
  // check to see if completedWord is true/truthy
  if (currentNode.completedWord) {
    // if true,
    // push completed word into suggestions array
    suggestions.push(currentNode.completedWord)
  }

  
  // base case = when currentNode.children === [];
  let nodeKey = Object.keys(currentNode.children);
 
 
  // recursive case = iterate over each key/individual node
  // as soon as node.children[key] deep equals an empty array,
  nodeKey.forEach(key =>  {
    search(currentNode.children[key])
  })
}
// calling the suggest method and passing in the currentNode
// I was testing and got an undefined because I wasn't passing
// currentNode in
search(currentNode)
// returning the array we declared @ top of method
// we have been pushing all completedWord's into this
// this is where the user is able to see suggested words
return(suggestions);
}

select(data) {
  // select a word from the tree
  let arrayOne = [...data]
  let currentNode = this.root
  let completedWord = data;

  // when a word is selected it should increase it's populatrity count
  arrayOne.forEach(letter => {
    let letterArray = arrayOne.shift()
    console.log(currentNode.popular)
    if (currentNode.completedWord) {
      currentNode.popular++
      console.log(currentNode.popular)
    } else {
     currentNode = currentNode.children[letter];
      console.log(currentNode.popular)
    }
    return currentNode.popular
  })
 

      

  }
  // when suggestions array comes back, should prioritize words that have come back most frequently.
}

