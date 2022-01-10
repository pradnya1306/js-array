// input_list = [1, 2, 2, 5, 8, 4, 4, 8]
// Count = 5 #because [1,2,5,8,4] are unique values.
input_list = [1, 2, 2, 5, 8, 4, 4, 8]
var newlist=[]
for (var i of input_list){
    if (! newlist.includes(i)){
        newlist.push(i)
    }
}
console.log(newlist)
console.log(newlist.length)