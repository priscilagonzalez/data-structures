var Stack = function() {
  var someInstance = {};

  var storage = {};

  var size = 0;

  someInstance.push = function(value) {

    storage[size++] = value;
  };

  someInstance.pop = function() {

    size && size--;
    var result = storage[size];

    delete storage[size];

    return result;
  };

  someInstance.size = function() {

    return size;
  };

  return someInstance;
};

/*var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {

    var greatest = Object.keys(storage)[0];
   if (Object.keys(storage).length > 0) {
     for (var key in storage) {
       if (parseInt(key) >= greatest) {
        greatest = parseInt(key);
       }
      }
      storage[greatest + 1] = value;
    } else {
      storage[0] = value;
   }

  };

  someInstance.pop = function() {
    var greatest = Object.keys(storage)[0];

    for (var key in storage) {
      if (parseInt(key) > greatest) {
        greatest = parseInt(key);
      }
    }
    var result = storage[greatest];
    delete storage[greatest];
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};*/

