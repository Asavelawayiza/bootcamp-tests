function yearsAgo(year){
   const day = new Date();
   var getFullYear2 = day.getFullYear();
    var results = getFullYear2 - year;
   return results;
  }   
  
   var year = 2012;
  var day = yearsAgo(year);
  
  