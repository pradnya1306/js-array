var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
newlist=[]
for (var i  of char_list){
    var count=0
    // b=[]
    for (var j of char_list){
        if (i==j){
            count=count+1  
        } 
    
    }
    b=[i,count]
    newlist.push(b)
}
console.log(newlist)
list=[]
for(var j of newlist){
    if(!list.includes(j)){
      var pass
    }
    else{
        list.push(j)
    }
}
console.log(list)




// char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
 
// uniques=[]
// for(var i of char_list){
//    if(!uniques.includes(i)){
//        uniques.push(i)
//    }
// }
// console.log(uniques);
 
// for(var j of uniques){
//    count=0
//    for(var k of char_list){
//        if (j === k){
//            count+=1
//        }
//    }
//    console.log(j,count," times");
// }