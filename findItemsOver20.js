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
  
 
var list  = "name : apples, qty : 10, name : pears, qty : 37, name : bananas, qty : 27, name : apples, qty : 3"

var ItemsOver20 = findItemsOver20(list);
