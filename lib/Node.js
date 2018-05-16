export default class Node {
  constructor(data) {
    this.data = data || null;
    this.next = null;
    this.children = {};
    this.lastNode = false;
  }
}