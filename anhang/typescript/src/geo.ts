export class Rectangle {
  constructor(private width: number,
              private height: number) {
  }
  getArea(): number {
    return this.width * this.height;
  }
  static createSquare(width:number): Rectangle {
    return new Rectangle(width, width);
  }
  toString(): string {
    return `Breite: ${this.width}  Höhe: ${this.height}`;
  }
}
