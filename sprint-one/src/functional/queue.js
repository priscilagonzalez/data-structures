var Queue = function() {
  var someInstance = {};

  var storage = {};

  var start = 0;
  var end = 0;

  someInstance.enqueue = function(value) {

    storage[end++] = value;
      };

  someInstance.dequeue = function() {

    // This does some unnecessary work sometimes.
    var result = storage[start];
    delete storage[start];

    someInstance.size() && start++;

    return result;
  };

  someInstance.size = function() {

    return end - start;
  };

  return someInstance;
};

/*var Queue = function() {
  var someInstance = {};

  var storage = {

  };

  someInstance.enqueue = function(value) {
    var greatest = Object.keys(storage)[0];
   if (Object.keys(storage).length > 0) {
     for (var key in storage) {
       if (parseInt(key) > greatest) {
         greatest = parseInt(key);
       }
      }
      storage[greatest + 1] = value;
    } else {
      storage[greatest] = value;
   }

  };

  someInstance.dequeue = function() {
    var smallest = Object.keys(storage)[0];

    for (var key in storage) {
      if (parseInt(key) < smallest) {
        smallest = parseInt(key);
      }
    }
    var result = storage[smallest];
    delete storage[smallest];
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};*/
