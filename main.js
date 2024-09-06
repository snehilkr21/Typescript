var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 10] = "Up";
    Direction[Direction["down"] = 11] = "down";
    Direction[Direction["left"] = 25] = "left";
    Direction[Direction["right"] = 26] = "right";
})(Direction || (Direction = {}));
var move = Direction.Up;
move = Direction.right;
console.log(move);
