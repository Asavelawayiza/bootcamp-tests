function isFromBellville(reg){
    if (reg.startsWith('CY')){
    return true;
    }
   else {
    return false;
   }
   };
 
   var reg = 'CY 123, CJ 123'
   var FrmBel = isFromBellville(reg);