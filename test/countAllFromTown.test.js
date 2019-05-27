describe('countAllFromTown test' , function(){
    it('should return registration numbers in the string that is for that town.' , function(){
        assert.equal(countAllFromTown(regNum), fromTown);
    })

    it('should return zero if there is no registration numbers in that string.' , function(){
        assert.equal(countAllFromTown(regNum), town);
    })

});
