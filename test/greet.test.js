describe('greet test' , function(){
    it('takes neighbour’s name as a parameter and returns a greeting message ' , function(){
        assert.equal(greet("Andy"), greeting);

    })
    it('should return a greeting message if given a name' , function(){
        assert.equal(greet(name), greeting);

    })
});
