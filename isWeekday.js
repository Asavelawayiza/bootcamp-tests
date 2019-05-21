function isWeekday(days){
    var M = 'Monday';
    //console.log(days)
    if (days.startsWith('M')){
      return true;
    }
    else{
      return false;
    }
  };
  assert.equal(isWeekday('tuesday'), false);

  var days = 'tuesday , Saturday , Monday';
  var isWekDay = isWeekday(days);