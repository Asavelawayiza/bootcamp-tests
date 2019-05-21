function countRegNumber(regNum){
    var countRegNumber = regNum.split(',')
    for (var i=0; i<countRegNumber.length; i++){
    var results =  countRegNumber.length;
      return results;
    }
    }
    var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
    assert.equal(regCount, 3)

    var regNum = ('CA 182736,CY 523519,CJ 812328')
    var regCount = countRegNumber(regNum);
 
    var dataLength = ('CL 225 525, CY 854 548, CJ 851236');