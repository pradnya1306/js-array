var fruits=require("readline-sync")
newlist=[]
for (var i=0;i<4;i++){
    var fruits1=fruits.question("enter the fruit name : ")
    newlist.push(fruits1)

}
console.log(newlist)
console.log("third element = ",newlist[2])