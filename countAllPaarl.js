function countAllPaarl(regNum){

     var reg = regNum.split(', ')
     var array = [];
     for (var i=0; i<reg.length; i++){
       var countAllPaarl = reg[i];
     if (countAllPaarl.startsWith('CJ')){
     array.push(countAllPaarl);
    } 
     }
     return array.length;
   }
   var countAllPaarl = reg;
   var regNum = ['CJ 345 123', 'CJ 555 885'];
   var allPaarl = countAllPaarl(regNum);
   
   