var str=require("readline-sync")
var str1=str.question("enter the string : ")
var i=str1.length-1
var new_str=""
while(i>=0){
    new_str=new_str+str1[i]
    i--
}
if (new_str==str1){
    console.log("it is palindrome")
}
else{
    console.log("it is not palindrome")
}
