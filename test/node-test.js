import { expect } from 'chai';
import Node from '../lib/Node';
import Tree from '../lib/Tree'

describe('Node', () => {
  let node;
  

  beforeEach(() => {
    node = new Node('pizza');
  })

  it('should be a thing', () => {
    expect(node).to.exist;
  })

  it('should take data and assign it to a data property', () => {
    expect(node.data).to.equal('pizza');
  })

  it('should have a lastNode property set to false', () => {
    expect(node.completedWord).to.equal(null);
  })

  it('should have a children property of an empty object', () => {
    expect(node.children).to.deep.equal({});
  });


})