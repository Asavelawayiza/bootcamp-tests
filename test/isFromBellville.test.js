describe('isFromBelllville test' , function(){
    it('returns true if a registration number is for Bellville' , function(){
        assert.equal(isFromBellville(reg), FrmBel);
    
    })

    it('returns false if a registration number is not for Bellville' , function(){
        assert.equal(isFromBellville(reg), FrmBel);
    
    })


});