import { expect } from 'chai';
import Tree from '../lib/Tree';
import Node from '../lib/Node';

describe('Tree', () => {
  let node;
  let tree;

beforeEach(() => {
  tree = new Tree();

})

it('should return true', () => {
  expect(true).to.equal(true);
})

describe('insert', () => {
  
  it('should be able to add a node to the tree', () => {
    tree.insert('hi', )
    expect(tree.root.children).to.equal('h');

  })


})

})