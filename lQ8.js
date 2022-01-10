var str=require("readline-sync")
var name=str.question("enter the string : ")
count=0
for (var i=0;i < name.length;i++){
   count+=1
}
console.log(count)
if (count%2==0){
    console.log("it is even string")
}
else{
    console.log("it is odd string")
}
