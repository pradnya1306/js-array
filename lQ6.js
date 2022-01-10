// You will be given a number and you need to return it as a string in Expanded Form. For example:
// 12  # Should return '10 + 2'
// 42 # Should return '40 + 2'
// 70304  # Should return '70000 + 300 + 4'
var str=require("readline-sync")
var num=str.questionInt("enter the number")
var num1=String(num)
var str1=""
for (var i=0;i<num1.length;i++){
    console.log(num1[i])
    h=num1.length-1
    if (h==0){
        str1=str1+(num1[i])
    }
    else{
        str1=str1+(num1[i]+("0"*h)+"+") 
    }     
}
console.log(str)

// b=(input("enter the number"))
// a=str(b)
// stri=""
// for i in range(len(a)):
//         leng=len(a)-i
//         if leng==0:
//             stri=stri+str(a[i])
//         else:
//            stri=stri+str(a[i])+"0"*leng+"+"
// print(stri)


