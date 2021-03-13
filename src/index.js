
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (!matrix || matrix == []) {
    return [];
  } 

  else {
    let matrix2 = matrix.map( (elem, index) => {

      if (index%2) return elem.reverse()
      else return elem
    })

    return matrix2.flat()
  }
  
}