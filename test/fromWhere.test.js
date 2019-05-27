describe('fromWhere test' , function(){
    it('takes a car registration number as a parameter and returns the town the car is from' , function(){
        assert.equal(fromWhere(reg) , where)
          })
          it('If reg number starts with CY return Bellville', function(){
            assert.equal(fromWhere(reg) , CY)
          })
      })
