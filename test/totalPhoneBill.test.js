describe('totalPhoneBill test' , function(){
    it('Calculate the total bill for the data provided' , function(){
        assert.equal(totalPhoneBill(data), bill);

    })
    it('should return R0.00 if no data is given' , function(){
        assert.equal(totalPhoneBill(''), 'R0.00' );

    })
});