var a=[3,5,8,10,20]
var newlist=[]
for (var i=0;i<a.length-1;i++){
    k=a[i+1]-a[i]
    newlist.push(k)
}
console.log(newlist)