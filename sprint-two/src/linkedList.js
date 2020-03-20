var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    var newTail = Node(value);

    if (!list.head) {
      list.head = newTail;
    }

    if (list.tail) {
      list.tail.next = newTail;
    }

    list.tail = newTail;
    };

  list.removeHead = function() {

    if (list.head === null) {
      return null;
    }

    var currentHead = list.head;
    list.head = list.head.next;

    return currentHead.value;
      };

  list.contains = function(target) {

    var node = list.head;

    while (node) {
      if (node.value === target) {
        return true;
      }

      node = node.next;
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
 */

/*var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    var newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function() {
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


//  Complexity: What is the time complexity of the above functions?
//  Contain - linear O(n)
//  Insert - constant time O (1)
//  Removal - constant time O(1)


 */
