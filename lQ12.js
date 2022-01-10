// he original list he original list is: [5, 6, [], 3, [], [], 9]
// List after empty list removal: [5, 6, 3, 9]
var a=[5, 6, [], 3, [], [], 9]
var newlist=[]

for(i of a){
if (typeof(i)!==Object){
    newlist.push(i)
}

}
console.log(newlist)

