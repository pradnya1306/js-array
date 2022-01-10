let str=require("readline-sync")
var i=0
var newarray=[]
while (i<3){
    str1=str.question("enter the game name : ")
    newarray.push(str1)
    i++
}
console.log(newarray)