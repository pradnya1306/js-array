var a=["mom","nitin","1221","pradnya","dd"]
for (var i of a){
    str=""
    for(var j=i.length-1;j>=0;j--){
        str=str+i[j]
    }
    if (str==i){
        // console.log(i,"it is palindrom")
        len=str.length
        if(len%2==0){
            console.log(i,"is even legnth")

        }
    }
}