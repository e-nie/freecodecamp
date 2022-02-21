function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  let removed = arr.shift();
  return removed;
  // Only change code above this line
}
