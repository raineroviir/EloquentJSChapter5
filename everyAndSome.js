var every = function(array, predicate) {
  var i;
  for (i = 0; i < array.length; i += 1) {
    if (!predicate(array[i])) {
      return false
    }
  }
  return true
}

var some = function(array, predicate) {
  var i;
  for (i = 0; i < array.length; i += 1) {
    if (predicate(array[i])) {
      return true
    }
  }
  return false
}
