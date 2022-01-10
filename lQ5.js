// For example, if we give 9119  the function should return  811181, as the  
// square of 9 is 81 and square of 1  is 1.
var str=require("readline-sync")
var str1=str.questionInt("enter the number")
var str2=String(str1)
var newstr=""
for (var i of str2){
    newstr=newstr+i*i
}
console.log(newstr)
