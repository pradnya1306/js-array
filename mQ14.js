var number = 30

var n = [10, 11, 12, 13, 14, 17, 18, 19]
var sum=0
var newlist=[]
for(var i of n){
    for (var j of n){
        var k=i+j
        var m=[i,j]
        if (k==number){
            newlist.push(m)
        }
    }  
}
console.log(newlist)
