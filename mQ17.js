var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var odd_sum=0
var even_sum=0
for (var i of elements){
    if (i%2==0){
        even_sum=even_sum+i
    }
    else{
        odd_sum=odd_sum+i

    }
} 
console.log(" average of even number=",even_sum/2)
console.log("average of odd number=",odd_sum/2)
console.log((even_sum+odd_sum)/2)