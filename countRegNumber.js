function countRegNumber(regNum){
  console.log(regNum)
    var countRegNumber = regNum.split(',')
    for (var i=0; i<countRegNumber.length; i++){
    var results =  countRegNumber.length;
      return results;
    }
    }
    var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
    assert.equal(regCount, 3)

    var regNum = 'CJ 124,CY 567,CL 345, CF 456, CL 341';
    var regCount = countRegNumber(regNum);
 
    var dataLength = 'CJ 124,CY 567,CL 345, CF 456, CL 341';