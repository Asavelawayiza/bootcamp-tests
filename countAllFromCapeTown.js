function countAllFromTown(regNum, loc){
    console.log(regNum)
     var reg = regNum.split(',')
     var array = [];
     for (var i=0; i<reg.length; i++){
       var countAllFromTown = reg[i];
     if (countAllFromTown.startsWith(loc)||countAllFromTown.startsWith(' '+loc)){
     array.push(countAllFromTown);
    }
     console.log(array);  
     }
     return array.length;
   }
   
   
   