
var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// numbers.reverse()
// console.log(numbers)
var i=numbers.length-1
var new_array=[]
while(i>=0){
    new_array.push(numbers[i])
    i--
}
console.log(new_array)