function findItemsOver20(list){
    var itemList = [];
    for (var i=0; i<list.length; i++){
      if (list[i].qty > 20)
      {
      itemList.push(list[i]);
      }
  }
    return itemList;
  }
  
  
var results = [
  {name : 'pears', qty : 37},
  {name : 'bananas', qty : 27},
];
