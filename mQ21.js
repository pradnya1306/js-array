var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
var k=[]
for (var i of n){
    count=0
    for (var j of n){
        if (i==j){
            count=count+1
            if (count>=2){
                if(!k.includes(i))
                   k.push(i)
            }
        }
    }
}
console.log(k)