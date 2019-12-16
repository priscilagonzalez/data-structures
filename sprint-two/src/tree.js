var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) { // 15
  //define a new tree
  var child = Tree(value); // {value: 15, children: []}
  //set the value as input value
  //push tree into children array
  this.children.push(child);


};
//whatever.contains(6)
treeMethods.contains = function (target) {
  //if target === value
  if (target === this.value) {
    //return true;
    return true;
  }
  //iterate over the children
  for (var i = 0; i < this.children.length; i++) {
    // call contain on each value of the loop
    if (this.children[i].contains(target)) {
      return true;
    }
  }

  return false;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
