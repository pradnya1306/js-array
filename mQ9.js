var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var max=0;
var second_max=0;
for (var i=0;i<numbers.length ;i++) {
   if (numbers[i]>max){
      max=numbers[i]
      k=i
   }
}
// console.log(max)
numbers.splice(k,1)
var second_max=0;
for (var j=0;j<numbers.length;j++) {
    if (numbers[j]>second_max){
            second_max=numbers[j]
       }  
}
 
console.log(second_max)