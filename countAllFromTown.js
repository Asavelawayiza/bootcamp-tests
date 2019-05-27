function countAllFromTown(regNum, loc){
     var reg = regNum.split(',')
     var array = [];
     for (var i=0; i<reg.length; i++){
       var countAllFromTown = reg[i];
     if (countAllFromTown.startsWith(loc)||countAllFromTown.startsWith(' '+loc)){
     array.push(countAllFromTown);
    }
     }
     return array.length;
   }
   var regNum = 'CJ 124,CY 567,CL 345, CF 456, CL 341';
   var fromTown = countAllFromTown(regNum);

  var town = '';
   