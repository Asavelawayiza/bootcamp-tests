describe('findItemsOver test' , function(){
    it('function should return products that have quantity higher than the threshold.' , function(){
        assert.equal(findItemsOver(list) , ItemsOver20)
          })
        });