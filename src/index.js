
exports.min = function min (array) {
  if(!array || array.length===0){
    return 0
  }
  let min = array[0]

  for (let index = 1; index < array.length; index++) {
    if(array[index]< min){
      min = array[index]
    }
  }  

  return min
}

exports.max = function max (array) {
  if(!array || array.length===0){
    return 0
  }
  let max = array[0]

  for (let index = 1; index < array.length; index++) {
    if(array[index]> max){
      max = array[index]
    }
  }  

  return max
}


exports.avg = function avg (array) {
  if(!array || array.length===0){
    return 0
  }
  let sum=0;
  for (let i = 0; i < array.length; i++) {
    sum+= array[i];
  }
  return sum/array.length
}
