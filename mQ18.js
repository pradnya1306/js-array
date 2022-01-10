var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var odd_sum=0
var odd_count=0
var even_sum=0
var even_count=0
for (var i of elements){
    if (i%2==0){
        even_sum=even_sum+i
        even_count=even_count+1
    }
    else{
        odd_sum=odd_sum+i
        odd_count=odd_count+1

    }
} 
console.log("sum of even number=",even_sum)
console.log("count of even number =",even_count)
console.log("sum of odd number=",odd_sum)
console.log("count of odd number=",odd_count)
console.log("average =",(even_sum+odd_sum)/2)