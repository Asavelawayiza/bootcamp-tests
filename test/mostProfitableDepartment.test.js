describe('mostProfitableDepartment test' , function(){
    it('should return the most profitable Department' , function(){
        assert.deepEqual(mostProfitableDepartment(salesData), departmentResults);
    });
    it('should return Zero if the data entered is false ' , function(){
        assert.deepEqual(mostProfitableDepartment(5586248), 0);
    })
});
