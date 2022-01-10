// The original list is: [ ['g', 'f', 'g'], ['i', 's'], ['b', 'e', 's', 't'] ]
// The String after join: gfgisbest
var is= [ ['g', 'f', 'g'], ['i', 's'], ['b', 'e', 's', 't'] ]
var str=""
for (var i of is){
    for (var j of i){
       str=str+j
    }
    
}
console.log(str)