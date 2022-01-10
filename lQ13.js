var a=["123","1234","12345","1","12345","12345","12345"]
max=0
list=[]
for (var i of a){
    len=i.length
    if (len>max){
        max=len
        h=i
    }
}
list.push(h)
if (list.includes(h)){
    list.push(h)
}
console.log(list)