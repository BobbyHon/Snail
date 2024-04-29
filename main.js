snail = function(array) {
    const arrayLength = array[0].length
    let top = 0
    let right = 0
    let bottom = 0
    let left = 0
    let counter = 0
    let answer = []
    
    while(Math.pow(arrayLength, 2) > answer.length){
      counter = counter % 4
      switch(counter){
          case 0:
            answer = answer.concat(array[top].slice(left, arrayLength - right))
            top++
            break
          case 1:
            for (let i = top; arrayLength - bottom > i; i++){
              answer = answer.concat(array[i][arrayLength - 1 - right])
            }
            right++
            break
          case 2:
            answer = answer.concat(array[arrayLength - bottom - 1].slice(left, arrayLength - right).reverse())
            bottom++
            break
          case 3:
            for (let j = bottom; arrayLength - top > j; j++){
              answer = answer.concat(array[arrayLength - j - 1][left])
            }
            left++
            break
      }
      counter++ 
    }
    return answer
  }