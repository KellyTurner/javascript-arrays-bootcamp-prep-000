var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var new_array = [element, ...array]
  return new_array
}
function addElementToEndOfArray (array,element) {
  var new_array = [element, ...array]
  return new_array
  }
