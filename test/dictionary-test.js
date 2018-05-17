import fs from 'fs';
import { expect } from 'chai';
import Node from '../lib/Node.js';
import Tree from '../lib/Tree.js';

describe('Tree', () => {
  let tree;
  const text = "/usr/share/dict/words";
  const dictionary = fs.readFileSync(text).toString().trim().split('\n')
  
  
  beforeEach(() => {
  tree = new Tree()
  })
  describe('Populate', () => {
  it('should count words in the dictionary', () => {
    tree.populate(dictionary);
    tree.count()
        // console.log(JSON.stringify(tree, null, 4))

    expect(tree.counter).to.equal(235886);
  })

  it('should suggest a word based on the prefix', () => {
    tree.populate(dictionary)

    expect(tree.suggest('humble')).to.deep.equal(
      ['humble',
      'humblebee',
      'humblehearted',
      'humblemouthed',
      'humbleness',
      'humbler']);
  })

  })
})

