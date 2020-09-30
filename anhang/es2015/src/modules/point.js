export default class Point {

    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return  'X: ' + this.x + ' Y: ' + this.y;
    }

    static getDistance(p1, p2) {
        const distX = p1.x - p2.x;
        const distY = p1.y - p2.y;

        return Math.sqrt(distX * distX + distY * distY);
    }
}

export function createPoint(x, y) {
    return new Point(x, y);
}