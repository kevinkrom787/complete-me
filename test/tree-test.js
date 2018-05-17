import { expect } from 'chai';
import Tree from '../lib/Tree';
import Node from '../lib/Node';

describe('Tree', () => {
  let node;
  let tree;

  beforeEach(() => {
    tree = new Tree();
  })

  it('should exist', () => {
    expect(tree).to.exist;
  })
  it('should have a root Node', () => {
    expect(tree.root).to.exist;
  })
  it('should have a counter property', () => {
    expect(tree.counter).to.equal(0);
  })

  describe('insert', () => {
    it('should be able to add a node to the tree', () => {
      tree.insert('hi')


      expect(Object.keys(tree.root.children)).to.deep.equal(['h']);
    })

    it('should be able to add multiple nodes to tree', () => {
      tree.insert('dog');
      tree.insert('dogs');
      tree.insert('hog');
      tree.insert('doggo');
      tree.insert('dogboh');

      expect(Object.keys(tree.root.children.d.children)).to.deep.equal(['o']);
    })

    it('should not create duplicate nodes', () => {
      tree.insert('lit');
      tree.insert('lit');

      expect(tree.counter).to.equal(1);
    })

    it('should count the number of words inserted', () => {
      tree.insert('cat')
      tree.insert('cat')
      tree.insert('bat')

      expect(tree.counter).to.equal(2);
    })

    describe('suggest', () => {
      it('should be able to suggest a word', () => {
        tree.insert('dog');
        tree.insert('dogs');
        tree.insert('hog');
        tree.insert('log')
        tree.insert('toggle')
      
        expect(tree.suggest('d')).to.deep.equal(['dog', 'dogs']);
      })

      it('should return empty array if no words are inserted', () => {
        expect(tree.suggest('')).to.deep.equal([]);
      })

      it('should create an array', () => {
        tree.insert('lit')
        tree.insert('fam')
        tree.insert('dude')

        expect(tree.suggest('d')).to.deep.equal(['dude']);
      })

    })

  })
})