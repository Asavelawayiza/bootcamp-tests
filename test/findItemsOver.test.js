describe('findItemsOver test' , function(){
    it('function should return products that have quantity higher than the threshold.' , function(){
        assert.deepEqual(findItemsOver(itemList, threshold) , result)
          })
          it('function should return an empty array if product is not over threshold.' , function(){
            assert.deepEqual(findItemsOver([{name : 'apples', qty : 3}], threshold), [])
              })
        });