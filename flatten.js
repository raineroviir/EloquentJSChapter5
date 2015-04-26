var arrays = [[1, 2, 3],[4, 5], [6]];
var flatten = function(array) {
  return array.reduce(function(a, b) {
    return a.concat(b);
});
}
flatten(arrays);
