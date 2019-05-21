describe('countRegNumber test' , function(){
it('should return the number of registration numbers in the string' , function(){
    assert.equal(countRegNumber(regNum) , regCount)
      })

      it('should return dataLength when given regCount' , function(){
        assert.equal(countRegNumber(dataLength) , regCount)
          });
    
});