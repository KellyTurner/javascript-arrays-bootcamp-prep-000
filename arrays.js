var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(element, array) {
  var new_array = [...array, element]
  return new_array
}
function addElementToEndOfArray (array,element) {
  var array = [element, ...array]
  return array
  }
