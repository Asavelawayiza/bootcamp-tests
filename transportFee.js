function transportFee(shift){
  if (shift == 'morning'){
  return 'R20';  
  }
    else if (shift == 'afternoon'){
      return 'R10';
    }
    else {
      return 'free';
    }
  };
  var shift = 'morning ,afternoon ,nightshift';
  var fee = transportFee(shift);
  
  var transport = 'free';