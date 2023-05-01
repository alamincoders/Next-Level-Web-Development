// normal function types declare
function addNormal(x, y) {
    return x + y;
}
// arrow function types declare
var addArrow = function (x, y) { return x + y; };
// array methods declare
var arr = [1, 2, 3, 4, 5];
var newArr = arr.map(function (num) { return num * num; });
console.log(newArr);
