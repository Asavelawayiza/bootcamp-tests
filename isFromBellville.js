function isFromBellville(reg){
    if (reg.startsWith('CY')){
    return true;
    }
   else {
    return false;
   }
   };
   var  reg = 'CY 178 569';
 
   var regstration = 'CL 445 55';
   var FrmBel = isFromBellville(regstration);