var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
var x=mainStr.split(" ")
var subStr = "over";
var newstr=""
for(var i of x){
    if (i!=subStr){
        newstr+=i+" "
    }
}
console.log(newstr)