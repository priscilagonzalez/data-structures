var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    // newNode.value = value;

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      //this.head.next = this.tail
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      // this.length++;
    }
  };

  list.removeHead = function() {
    // if (this.length === 0) {
    //   return undefined;
    // }
      var formerHead = this.head;
      this.head = formerHead.next;
      this.length--;
      return formerHead.value;
  };

  list.contains = function(target) {
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 Contain - linear O(n)
 Insert - constant time O (1)
 Removal - constant time O(1)
 */
