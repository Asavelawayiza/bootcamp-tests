describe('transportFee test' , function(){
    it('returns the right price based on the shift you are working' , function(){
        assert.equal(transportFee(shift), fee);

    })
        it('returns free if you working nightshift' , function(){
            assert.equal(transportFee(shift), transport);
    
        })
})