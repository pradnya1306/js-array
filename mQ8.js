// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// var max=0
// var i=0
// while(i<numbers.length){
//     if (numbers[i]>max){
//         max=numbers[i]
//     }
//     i++
// }
// console.log(max)


var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var max_num=0;
for(var i=0;i<numbers.length;i++) {
    if (numbers[i]>max_num){
       max_num=numbers[i]
 
   }
}
console.log(max_num)