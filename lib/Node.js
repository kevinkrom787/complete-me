export default class Node {
  constructor(data) {
    this.data = data || null;
    this.children = {};
    this.completedWord = null;
    this.popular = 0
  }
}