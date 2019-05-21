describe('regCheck test' , function(){
    it('return true if a registration number is for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck(loc), regChck);

    })
    it('return false if a registration number is for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck(loc), regChck);

    })
    it('should return results when given regNum.endsWith(loc)' , function(){
        assert.equal(regCheck(reg), regChck);
    });


}); 