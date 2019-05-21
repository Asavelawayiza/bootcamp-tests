describe('yearsAgo test' , function(){
    it('takes in a year and return how many years ago that was' , function(){
        assert.equal(yearsAgo(day), year);

    });
    it('takes in a day and return how many years ago that was' , function(){
        assert.equal(yearsAgo(year), day);

    });


}); 