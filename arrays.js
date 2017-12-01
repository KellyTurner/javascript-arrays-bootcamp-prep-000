var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var new_array = [element, ...array]
  return new_array
}
function addElementToEndOfArray (array, element) {
  var new_array2 = [...array, element]
  return new_array2
  }
function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array
}
function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}
function accessElementInArray (array, index) {
  console.log(array[3] + index)
}
function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift(element)
  return array
}
