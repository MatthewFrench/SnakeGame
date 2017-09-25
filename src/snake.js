
export default class Snake {
  constructor(x, y, segments) {
    this.body = [];
    for (var i = 0; i < segments; i++) {
      this.body.push({x: x - 1, y: y});
    }
    this.direction = 'right';
  }
  render() {

  }
}