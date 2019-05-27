function countAllPaarl(regNum){
     var reg = regNum.split(',')
     var array = [];
     for (var i=0; i<reg.length; i++){
       var paarl = reg[i];
      
     if (paarl.startsWith('CJ')){
     array.push(paarl);
    } 
     }
     return array.length;
   }
   var regNum = 'CJ 124,CY 567,CL 345, CF 456, CL 341';
   var paarl = regNum.startsWith('CJ');
   var allPaarl = countAllPaarl(regNum);
   
  
   
   