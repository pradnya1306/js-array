var kitnapaisahai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var cororpati_count=0
var lakhpati_count=0
var dilwale_count=0
for (var i of kitnapaisahai){
    if (i>=10000000){
        cororpati_count+=1
    }
    else if(i>=100000){
        lakhpati_count+=1
    }
    else{
        dilwale_count+=1
    }
}
console.log("cororpati=",cororpati_count)
console.log("lakhpati=",lakhpati_count)
console.log("dilawale=",dilwale_count)

