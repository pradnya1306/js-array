var a=[10,20,10,20,11,23,11,23,34,67]
// o/p=[11,23]
var  newlist=[]
for (var i of a){
    count=0
    for (var j of a){
        if(i==j){
            count=count+1
            h=i
        }
    }
    // console.log(h,count)
    if ((count>2)||(count<2)){
        if (!newlist.includes(h)){
            newlist.push(h)
        }
    }
}
console.log(newlist)


// 
