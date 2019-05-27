
function findItemsOver(list, threshold){
    var itemList = [];
    for (var i=0; i<list.length; i++){
        if (list[i].qty > threshold){
          itemList.push(list[i]);
     }
    }
      return itemList;
    }
    var itemList = [
      {name : 'apples', qty : 10},
      {name : 'pears', qty : 37},
      {name : 'bananas', qty : 27},
      {name : 'apples', qty : 3},
  ];
  var threshold = 20;
  var result = findItemsOver(itemList, threshold);