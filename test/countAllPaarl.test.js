describe('countAllPaarl test' , function(){
    it('takes a parameter string with registration numbers and returns the number of registration numbers in the string for Paarl' , function(){
        assert.equal(countAllPaarl(regNum), paarl);

    })
    it('takes a parameter string with registration numbers and returns the number of registration numbers in that string.' , function(){
        assert.equal(countAllPaarl(regNum), allPaarl);

    })
})